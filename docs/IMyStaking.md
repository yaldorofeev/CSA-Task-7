# IMyStaking









## Methods

### claim

```solidity
function claim() external nonpayable
```



*Calculate rewards of each user&#39;s stake and transfer resulted amount of tokens to user. In each stake&#39;s timestamp for reward estimation is updated. Emits a {StakeDone} event.*


### daoContractAddress

```solidity
function daoContractAddress() external view returns (address)
```



*Return address of DAO contract that deployed by this contract.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### lockPeriod

```solidity
function lockPeriod() external view returns (uint256)
```



*Return the period of lock of lp tokens in seconds.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### rewardPeriod

```solidity
function rewardPeriod() external view returns (uint256)
```



*Return the period of reward in seconds.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### rewardProcents

```solidity
function rewardProcents() external view returns (uint256)
```



*Return the reward procents.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### stake

```solidity
function stake(uint256 _amount, bytes32[] _whiteListProof) external nonpayable
```



*Moves `_amount` lp tokens from the caller&#39;s account to this contract. Emits a {StakeDone} event.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _amount | uint256 | undefined |
| _whiteListProof | bytes32[] | undefined |

### stakes

```solidity
function stakes(address staker) external view returns (uint256, uint256, uint256, uint256)
```



*Mapping from staker to record about user&#39;s staking.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| staker | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |
| _1 | uint256 | undefined |
| _2 | uint256 | undefined |
| _3 | uint256 | undefined |

### unstake

```solidity
function unstake(uint256 _amount) external nonpayable
```



*Unstake lp tokens. Function become available after lock period expire. Emits a {Unstake} event.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _amount | uint256 | undefined |

### whiteListRoot

```solidity
function whiteListRoot() external view returns (bytes32)
```



*Return the Merkle tree root of users in a white list.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bytes32 | undefined |



## Events

### Claim

```solidity
event Claim(address indexed _to, uint256 _value)
```



*Emitted when claim done. `_to` is the account that made this claim reward. &#39;__value&#39; is amount of reward tokens transfered.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _to `indexed` | address | undefined |
| _value  | uint256 | undefined |

### StakeDone

```solidity
event StakeDone(address indexed _from, uint256 _value)
```



*Emitted when stake done. `_from` is the account that made this stake. &#39;__value&#39; is amount of lp tokens staked.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _from `indexed` | address | undefined |
| _value  | uint256 | undefined |

### Unstake

```solidity
event Unstake(address indexed _to, uint256 _value)
```



*Emitted when unstake done. `_to` is the account that made this unstake. &#39;__value&#39; is amount of lp tokens to return.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _to `indexed` | address | undefined |
| _value  | uint256 | undefined |



