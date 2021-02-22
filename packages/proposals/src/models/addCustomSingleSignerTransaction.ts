import {
  PublicKey,
  SYSVAR_RENT_PUBKEY,
  TransactionInstruction,
} from '@solana/web3.js';
import { utils } from '@oyster/common';
import * as Layout from '../utils/layout';

import * as BufferLayout from 'buffer-layout';
import {
  DESC_SIZE,
  INSTRUCTION_LIMIT,
  NAME_SIZE,
  TimelockConfig,
  TimelockInstruction,
  TRANSACTION_SLOTS,
} from './timelock';
import BN from 'bn.js';
import { toUTF8Array } from '@oyster/common/dist/lib/utils';

/// [Requires Signatory token]
/// Adds a Transaction to the Timelock Set. Max of 10 of any Transaction type. More than 10 will throw error.
/// Creates a PDA using your authority to be used to later execute the instruction.
/// This transaction needs to contain authority to execute the program.
///
///   0. `[writable]` Uninitialized Timelock Transaction account.
///   1. `[writable]` Timelock set account.
///   2. `[writable]` Signatory account
///   3. `[writable]` Signatory validation account.
///   4. `[]` Timelock program account.
///   5. `[]` Token program account.
export const addCustomSingleSignerTransactionInstruction = (
  timelockTransactionAccount: PublicKey,
  timelockSetAccount: PublicKey,
  signatoryAccount: PublicKey,
  signatoryValidationAccount: PublicKey,
  slot: string,
  instruction: string,
  position: number,
): TransactionInstruction => {
  const PROGRAM_IDS = utils.programIds();

  const instructionAsBytes = toUTF8Array(instruction);
  if (instructionAsBytes.length > INSTRUCTION_LIMIT) {
    throw new Error(
      'Instruction length in bytes is more than ' + INSTRUCTION_LIMIT,
    );
  }

  if (position > TRANSACTION_SLOTS) {
    throw new Error(
      'Position is more than ' + TRANSACTION_SLOTS + ' which is not allowed.',
    );
  }

  const dataLayout = BufferLayout.struct([
    BufferLayout.u8('instruction'),
    Layout.uint64('slot'),
    BufferLayout.seq(BufferLayout.u8(), INSTRUCTION_LIMIT, 'instructions'),
    BufferLayout.u8('position'),
  ]);

  const data = Buffer.alloc(dataLayout.span);
  for (let i = instructionAsBytes.length; i <= INSTRUCTION_LIMIT - 1; i++) {
    instructionAsBytes.push(0);
  }
  console.log('Lenth', instructionAsBytes.length);

  dataLayout.encode(
    {
      instruction: TimelockInstruction.addCustomSingleSignerTransaction,
      slot: new BN(slot),
      instructions: instructionAsBytes,
      position: position,
    },
    data,
  );

  const keys = [
    { pubkey: timelockTransactionAccount, isSigner: true, isWritable: true },
    { pubkey: timelockSetAccount, isSigner: false, isWritable: true },
    { pubkey: signatoryAccount, isSigner: false, isWritable: true },
    { pubkey: signatoryValidationAccount, isSigner: false, isWritable: true },
    {
      pubkey: PROGRAM_IDS.timelock.programAccountId,
      isSigner: false,
      isWritable: false,
    },
    { pubkey: PROGRAM_IDS.token, isSigner: false, isWritable: false },
  ];
  console.log('data', data);
  return new TransactionInstruction({
    keys,
    programId: PROGRAM_IDS.timelock.programId,
    data,
  });
};