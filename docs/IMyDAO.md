# IMyDAO









## Methods

### addProposal

```solidity
function addProposal(bytes _callData, address _recipient, string _description) external nonpayable
```



*Only chairmans can propose votings.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _callData | bytes | : data for call an external contract. |
| _recipient | address | : address of an external contract. |
| _description | string | of call. emit NewVotingAdded. |

### approveUnstake

```solidity
function approveUnstake(address _sender, uint256 _amount, uint256 _balance) external nonpayable
```



*Function for approving unstaking of staking contract.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _sender | address | : address of unstaking user. |
| _amount | uint256 | : unstaked amount. |
| _balance | uint256 | staked balance of user. |

### chairManCount

```solidity
function chairManCount() external view returns (uint256)
```



*Getter for actual votings array length*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### debatingPeriodDuration

```solidity
function debatingPeriodDuration() external view returns (uint256)
```



*Getter for actual votings array length.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### delegate

```solidity
function delegate(uint256 _votingId, address _to) external nonpayable
```



*Delegate votes to some person. That person should have voting tokens.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _votingId | uint256 | of voting for votes delegated. |
| _to | address | : address to whom delegated. |

### finishProposal

```solidity
function finishProposal(uint256 _votingId) external nonpayable
```



*Finish voting for proposal. Anybody can call this function.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _votingId | uint256 | of voting. emit Vote |

### getActualVotingsIds

```solidity
function getActualVotingsIds() external view returns (uint256[])
```



*Getter for actual votings array length*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256[] | undefined |

### getActualVotingsIdsLength

```solidity
function getActualVotingsIdsLength() external view returns (uint256)
```



*Getter for actual votings array length*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### getDelegated

```solidity
function getDelegated(uint256 _votingId, address _delegetor) external view returns (address)
```



*Getter for actual votings array length*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _votingId | uint256 | undefined |
| _delegetor | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### getDelegatedTotalBalance

```solidity
function getDelegatedTotalBalance(uint256 _votingId, address _delegeted) external view returns (uint256)
```



*Getter for actual votings array length*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _votingId | uint256 | undefined |
| _delegeted | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### getIsVoted

```solidity
function getIsVoted(uint256 _votingId, address _voter) external view returns (bool)
```



*Getter for actual votings array length*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _votingId | uint256 | undefined |
| _voter | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### minimumQuorum

```solidity
function minimumQuorum() external view returns (uint256)
```



*Getter for actual votings array length.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### unDelegate

```solidity
function unDelegate(uint256 _votingId) external nonpayable
```



*Undelegate votes.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _votingId | uint256 | of voting for votes undelegated. |

### vote

```solidity
function vote(uint256 _votingId, bool _agree) external nonpayable
```



*Vote for proposal.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _votingId | uint256 | of voting. |
| _agree | bool | : agreement or disagreement for a proposal. |

### voteTokenAddr

```solidity
function voteTokenAddr() external view returns (address)
```



*Getter for actual votings array length.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### votingCount

```solidity
function votingCount() external view returns (uint256)
```



*Getter for actual votings array length.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### votings

```solidity
function votings(uint256 votingId) external view returns (bool actual, uint256 startTime, string description, bytes callData, address recipient, uint256 totalVotes, uint256 agreeVotes)
```



*Getter for actual votings array length*

#### Parameters

| Name | Type | Description |
|---|---|---|
| votingId | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| actual | bool | undefined |
| startTime | uint256 | undefined |
| description | string | undefined |
| callData | bytes | undefined |
| recipient | address | undefined |
| totalVotes | uint256 | undefined |
| agreeVotes | uint256 | undefined |



## Events

### NewVotingAdded

```solidity
event NewVotingAdded(uint256 votingId, string description)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| votingId  | uint256 | undefined |
| description  | string | undefined |

### Vote

```solidity
event Vote(uint256 votingId, address voter, bool result, uint256 amount)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| votingId  | uint256 | undefined |
| voter  | address | undefined |
| result  | bool | undefined |
| amount  | uint256 | undefined |

### VotingOver

```solidity
event VotingOver(uint256 votingId, bool result)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| votingId  | uint256 | undefined |
| result  | bool | undefined |



