/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractTransaction, EventFilter, Signer } from 'ethers';
import { Listener, Provider } from 'ethers/providers';
import { Arrayish, BigNumber, BigNumberish, Interface } from 'ethers/utils';
import {
  TransactionOverrides,
  TypedEventDescription,
  TypedFunctionDescription,
} from '.';

interface Erc20Interface extends Interface {
  functions: {
    allowance: TypedFunctionDescription<{
      encode([owner, spender]: [string, string]): string;
    }>;

    approve: TypedFunctionDescription<{
      encode([spender, amount]: [string, BigNumberish]): string;
    }>;

    balanceOf: TypedFunctionDescription<{
      encode([account]: [string]): string;
    }>;

    decimals: TypedFunctionDescription<{ encode([]: []): string }>;

    decreaseAllowance: TypedFunctionDescription<{
      encode([spender, subtractedValue]: [string, BigNumberish]): string;
    }>;

    increaseAllowance: TypedFunctionDescription<{
      encode([spender, addedValue]: [string, BigNumberish]): string;
    }>;

    name: TypedFunctionDescription<{ encode([]: []): string }>;

    symbol: TypedFunctionDescription<{ encode([]: []): string }>;

    totalSupply: TypedFunctionDescription<{ encode([]: []): string }>;

    transfer: TypedFunctionDescription<{
      encode([recipient, amount]: [string, BigNumberish]): string;
    }>;

    transferFrom: TypedFunctionDescription<{
      encode([sender, recipient, amount]: [
        string,
        string,
        BigNumberish,
      ]): string;
    }>;
  };

  events: {
    Approval: TypedEventDescription<{
      encodeTopics([owner, spender, value]: [
        string | null,
        string | null,
        null,
      ]): string[];
    }>;

    Transfer: TypedEventDescription<{
      encodeTopics([from, to, value]: [
        string | null,
        string | null,
        null,
      ]): string[];
    }>;
  };
}

export class Erc20 extends Contract {
  connect(signerOrProvider: Signer | Provider | string): Erc20;
  attach(addressOrName: string): Erc20;
  deployed(): Promise<Erc20>;

  on(event: EventFilter | string, listener: Listener): Erc20;
  once(event: EventFilter | string, listener: Listener): Erc20;
  addListener(eventName: EventFilter | string, listener: Listener): Erc20;
  removeAllListeners(eventName: EventFilter | string): Erc20;
  removeListener(eventName: any, listener: Listener): Erc20;

  interface: Erc20Interface;

  functions: {
    allowance(
      owner: string,
      spender: string,
      overrides?: TransactionOverrides,
    ): Promise<BigNumber>;

    'allowance(address,address)'(
      owner: string,
      spender: string,
      overrides?: TransactionOverrides,
    ): Promise<BigNumber>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: TransactionOverrides,
    ): Promise<ContractTransaction>;

    'approve(address,uint256)'(
      spender: string,
      amount: BigNumberish,
      overrides?: TransactionOverrides,
    ): Promise<ContractTransaction>;

    balanceOf(
      account: string,
      overrides?: TransactionOverrides,
    ): Promise<BigNumber>;

    'balanceOf(address)'(
      account: string,
      overrides?: TransactionOverrides,
    ): Promise<BigNumber>;

    decimals(overrides?: TransactionOverrides): Promise<number>;

    'decimals()'(overrides?: TransactionOverrides): Promise<number>;

    decreaseAllowance(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: TransactionOverrides,
    ): Promise<ContractTransaction>;

    'decreaseAllowance(address,uint256)'(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: TransactionOverrides,
    ): Promise<ContractTransaction>;

    increaseAllowance(
      spender: string,
      addedValue: BigNumberish,
      overrides?: TransactionOverrides,
    ): Promise<ContractTransaction>;

    'increaseAllowance(address,uint256)'(
      spender: string,
      addedValue: BigNumberish,
      overrides?: TransactionOverrides,
    ): Promise<ContractTransaction>;

    name(overrides?: TransactionOverrides): Promise<string>;

    'name()'(overrides?: TransactionOverrides): Promise<string>;

    symbol(overrides?: TransactionOverrides): Promise<string>;

    'symbol()'(overrides?: TransactionOverrides): Promise<string>;

    totalSupply(overrides?: TransactionOverrides): Promise<BigNumber>;

    'totalSupply()'(overrides?: TransactionOverrides): Promise<BigNumber>;

    transfer(
      recipient: string,
      amount: BigNumberish,
      overrides?: TransactionOverrides,
    ): Promise<ContractTransaction>;

    'transfer(address,uint256)'(
      recipient: string,
      amount: BigNumberish,
      overrides?: TransactionOverrides,
    ): Promise<ContractTransaction>;

    transferFrom(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: TransactionOverrides,
    ): Promise<ContractTransaction>;

    'transferFrom(address,address,uint256)'(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: TransactionOverrides,
    ): Promise<ContractTransaction>;
  };

  allowance(
    owner: string,
    spender: string,
    overrides?: TransactionOverrides,
  ): Promise<BigNumber>;

  'allowance(address,address)'(
    owner: string,
    spender: string,
    overrides?: TransactionOverrides,
  ): Promise<BigNumber>;

  approve(
    spender: string,
    amount: BigNumberish,
    overrides?: TransactionOverrides,
  ): Promise<ContractTransaction>;

  'approve(address,uint256)'(
    spender: string,
    amount: BigNumberish,
    overrides?: TransactionOverrides,
  ): Promise<ContractTransaction>;

  balanceOf(
    account: string,
    overrides?: TransactionOverrides,
  ): Promise<BigNumber>;

  'balanceOf(address)'(
    account: string,
    overrides?: TransactionOverrides,
  ): Promise<BigNumber>;

  decimals(overrides?: TransactionOverrides): Promise<number>;

  'decimals()'(overrides?: TransactionOverrides): Promise<number>;

  decreaseAllowance(
    spender: string,
    subtractedValue: BigNumberish,
    overrides?: TransactionOverrides,
  ): Promise<ContractTransaction>;

  'decreaseAllowance(address,uint256)'(
    spender: string,
    subtractedValue: BigNumberish,
    overrides?: TransactionOverrides,
  ): Promise<ContractTransaction>;

  increaseAllowance(
    spender: string,
    addedValue: BigNumberish,
    overrides?: TransactionOverrides,
  ): Promise<ContractTransaction>;

  'increaseAllowance(address,uint256)'(
    spender: string,
    addedValue: BigNumberish,
    overrides?: TransactionOverrides,
  ): Promise<ContractTransaction>;

  name(overrides?: TransactionOverrides): Promise<string>;

  'name()'(overrides?: TransactionOverrides): Promise<string>;

  symbol(overrides?: TransactionOverrides): Promise<string>;

  'symbol()'(overrides?: TransactionOverrides): Promise<string>;

  totalSupply(overrides?: TransactionOverrides): Promise<BigNumber>;

  'totalSupply()'(overrides?: TransactionOverrides): Promise<BigNumber>;

  transfer(
    recipient: string,
    amount: BigNumberish,
    overrides?: TransactionOverrides,
  ): Promise<ContractTransaction>;

  'transfer(address,uint256)'(
    recipient: string,
    amount: BigNumberish,
    overrides?: TransactionOverrides,
  ): Promise<ContractTransaction>;

  transferFrom(
    sender: string,
    recipient: string,
    amount: BigNumberish,
    overrides?: TransactionOverrides,
  ): Promise<ContractTransaction>;

  'transferFrom(address,address,uint256)'(
    sender: string,
    recipient: string,
    amount: BigNumberish,
    overrides?: TransactionOverrides,
  ): Promise<ContractTransaction>;

  filters: {
    Approval(
      owner: string | null,
      spender: string | null,
      value: null,
    ): EventFilter;

    Transfer(from: string | null, to: string | null, value: null): EventFilter;
  };

  estimate: {
    allowance(
      owner: string,
      spender: string,
      overrides?: TransactionOverrides,
    ): Promise<BigNumber>;

    'allowance(address,address)'(
      owner: string,
      spender: string,
      overrides?: TransactionOverrides,
    ): Promise<BigNumber>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: TransactionOverrides,
    ): Promise<BigNumber>;

    'approve(address,uint256)'(
      spender: string,
      amount: BigNumberish,
      overrides?: TransactionOverrides,
    ): Promise<BigNumber>;

    balanceOf(
      account: string,
      overrides?: TransactionOverrides,
    ): Promise<BigNumber>;

    'balanceOf(address)'(
      account: string,
      overrides?: TransactionOverrides,
    ): Promise<BigNumber>;

    decimals(overrides?: TransactionOverrides): Promise<BigNumber>;

    'decimals()'(overrides?: TransactionOverrides): Promise<BigNumber>;

    decreaseAllowance(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: TransactionOverrides,
    ): Promise<BigNumber>;

    'decreaseAllowance(address,uint256)'(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: TransactionOverrides,
    ): Promise<BigNumber>;

    increaseAllowance(
      spender: string,
      addedValue: BigNumberish,
      overrides?: TransactionOverrides,
    ): Promise<BigNumber>;

    'increaseAllowance(address,uint256)'(
      spender: string,
      addedValue: BigNumberish,
      overrides?: TransactionOverrides,
    ): Promise<BigNumber>;

    name(overrides?: TransactionOverrides): Promise<BigNumber>;

    'name()'(overrides?: TransactionOverrides): Promise<BigNumber>;

    symbol(overrides?: TransactionOverrides): Promise<BigNumber>;

    'symbol()'(overrides?: TransactionOverrides): Promise<BigNumber>;

    totalSupply(overrides?: TransactionOverrides): Promise<BigNumber>;

    'totalSupply()'(overrides?: TransactionOverrides): Promise<BigNumber>;

    transfer(
      recipient: string,
      amount: BigNumberish,
      overrides?: TransactionOverrides,
    ): Promise<BigNumber>;

    'transfer(address,uint256)'(
      recipient: string,
      amount: BigNumberish,
      overrides?: TransactionOverrides,
    ): Promise<BigNumber>;

    transferFrom(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: TransactionOverrides,
    ): Promise<BigNumber>;

    'transferFrom(address,address,uint256)'(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: TransactionOverrides,
    ): Promise<BigNumber>;
  };
}
