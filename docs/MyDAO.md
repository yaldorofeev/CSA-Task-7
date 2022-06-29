# MyDAO









## Methods

### CHAIR_ROLE

```solidity
function CHAIR_ROLE() external view returns (bytes32)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bytes32 | undefined |

### DEFAULT_ADMIN_ROLE

```solidity
function DEFAULT_ADMIN_ROLE() external view returns (bytes32)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bytes32 | undefined |

### UNSTAKER_ROLE

```solidity
function UNSTAKER_ROLE() external view returns (bytes32)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bytes32 | undefined |

### addChairMan

```solidity
function addChairMan(address newChairman) external nonpayable returns (bool)
```



*Function for adding new chairman of votings. The function can be called only from the contract by finishing appropriate voting. In case of reentrancy by group of voters (and some chairman) the maximum demadge is that the dublicated votings will remain aqtual forever.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| newChairman | address | address. return true if success. |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

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

### getRoleAdmin

```solidity
function getRoleAdmin(bytes32 role) external view returns (bytes32)
```



*Returns the admin role that controls `role`. See {grantRole} and {revokeRole}. To change a role&#39;s admin, use {_setRoleAdmin}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| role | bytes32 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bytes32 | undefined |

### grantRole

```solidity
function grantRole(bytes32 role, address account) external nonpayable
```



*Grants `role` to `account`. If `account` had not been already granted `role`, emits a {RoleGranted} event. Requirements: - the caller must have ``role``&#39;s admin role.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| role | bytes32 | undefined |
| account | address | undefined |

### hasRole

```solidity
function hasRole(bytes32 role, address account) external view returns (bool)
```



*Returns `true` if `account` has been granted `role`.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| role | bytes32 | undefined |
| account | address | undefined |

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

### removeChairMan

```solidity
function removeChairMan(address chairMan) external nonpayable returns (bool)
```



*Function for removing chairman of votings. There must be more than one chairman in contract to call the function. The function can be called only from the contract by finishing appropriate voting.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| chairMan | address | address for remove. return true if success. |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### renounceRole

```solidity
function renounceRole(bytes32 role, address account) external nonpayable
```



*Revokes `role` from the calling account. Roles are often managed via {grantRole} and {revokeRole}: this function&#39;s purpose is to provide a mechanism for accounts to lose their privileges if they are compromised (such as when a trusted device is misplaced). If the calling account had been revoked `role`, emits a {RoleRevoked} event. Requirements: - the caller must be `account`.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| role | bytes32 | undefined |
| account | address | undefined |

### resetMinimumQuorum

```solidity
function resetMinimumQuorum(uint256 newQuorum) external nonpayable returns (bool)
```



*Function for reset minimum quorum. The function can be called only from the contract by finishing appropriate voting.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| newQuorum | uint256 | . return true if success. |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### revokeRole

```solidity
function revokeRole(bytes32 role, address account) external nonpayable
```



*Revokes `role` from `account`. If `account` had been granted `role`, emits a {RoleRevoked} event. Requirements: - the caller must have ``role``&#39;s admin role.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| role | bytes32 | undefined |
| account | address | undefined |

### supportsInterface

```solidity
function supportsInterface(bytes4 interfaceId) external view returns (bool)
```



*See {IERC165-supportsInterface}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| interfaceId | bytes4 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

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
function votings(uint256) external view returns (bool actual, uint256 startTime, string description, bytes callData, address recipient, uint256 totalVotes, uint256 agreeVotes)
```



*Getter for actual votings array length*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

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

### RoleAdminChanged

```solidity
event RoleAdminChanged(bytes32 indexed role, bytes32 indexed previousAdminRole, bytes32 indexed newAdminRole)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| role `indexed` | bytes32 | undefined |
| previousAdminRole `indexed` | bytes32 | undefined |
| newAdminRole `indexed` | bytes32 | undefined |

### RoleGranted

```solidity
event RoleGranted(bytes32 indexed role, address indexed account, address indexed sender)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| role `indexed` | bytes32 | undefined |
| account `indexed` | address | undefined |
| sender `indexed` | address | undefined |

### RoleRevoked

```solidity
event RoleRevoked(bytes32 indexed role, address indexed account, address indexed sender)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| role `indexed` | bytes32 | undefined |
| account `indexed` | address | undefined |
| sender `indexed` | address | undefined |

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



