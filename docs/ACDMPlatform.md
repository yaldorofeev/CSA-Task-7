# ACDMPlatform









## Methods

### DEFAULT_ADMIN_ROLE

```solidity
function DEFAULT_ADMIN_ROLE() external view returns (bytes32)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bytes32 | undefined |

### acdmTokenAddress

```solidity
function acdmTokenAddress() external view returns (address)
```



*Get address of acdm tokens contract.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### acdm_accaunt

```solidity
function acdm_accaunt() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### acdm_spec_accaunt

```solidity
function acdm_spec_accaunt() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### addOrder

```solidity
function addOrder(uint256 _amount, uint256 _price) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _amount | uint256 | undefined |
| _price | uint256 | undefined |

### buy

```solidity
function buy(uint256 _amount) external payable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _amount | uint256 | undefined |

### buyAndBurnXXXTokens

```solidity
function buyAndBurnXXXTokens() external nonpayable returns (bool)
```



*Buying and burning XXXTokens from liquidity pool to strengthen      the course of the token. This function can be called from      DAO COntract only.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### changeRefersSaleFee

```solidity
function changeRefersSaleFee(uint256[] _newFees) external nonpayable returns (bool)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _newFees | uint256[] | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### changeRefersTradeFee

```solidity
function changeRefersTradeFee(uint256 _newFee) external nonpayable returns (bool)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _newFee | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### dao_address

```solidity
function dao_address() external view returns (address)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### getCurrentRoundId

```solidity
function getCurrentRoundId() external view returns (uint256)
```



*Get id of current round.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### getOrdersNumber

```solidity
function getOrdersNumber() external view returns (uint256)
```



*Get orders number.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

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

### getUserRefers

```solidity
function getUserRefers(address _user, uint256 _referNumber) external view returns (address)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _user | address | undefined |
| _referNumber | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### getWithdrawRole

```solidity
function getWithdrawRole() external view returns (bytes32)
```



*Get withdrow role.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bytes32 | undefined |

### giveToOwner

```solidity
function giveToOwner() external nonpayable returns (bool)
```



*Giving fee to owner (transfer from spec_account to account      from that owner can make withdrow). This function can be called from      DAO contract only.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

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

### initEmission

```solidity
function initEmission() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### initSale

```solidity
function initSale() external nonpayable
```



*Starting the very first sale. Emits a {SignOn} event.*


### initSalePrice

```solidity
function initSalePrice() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### nextPriceA_denom

```solidity
function nextPriceA_denom() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### nextPriceA_num

```solidity
function nextPriceA_num() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### nextPriceB

```solidity
function nextPriceB() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### orders

```solidity
function orders(uint256) external view returns (address seller, uint256 price, uint256 amount)
```



*Get order.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| seller | address | undefined |
| price | uint256 | undefined |
| amount | uint256 | undefined |

### redeemOrder

```solidity
function redeemOrder(uint256 _orderId, uint256 _amount) external payable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _orderId | uint256 | undefined |
| _amount | uint256 | undefined |

### referSaleFees

```solidity
function referSaleFees(uint256) external view returns (uint256)
```



*Get refers sale fee.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### referTradeFee

```solidity
function referTradeFee() external view returns (uint256)
```



*Get refers trade fee.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### refersCount

```solidity
function refersCount() external view returns (uint256)
```



*Get refers count of a contract.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### removeOrder

```solidity
function removeOrder(uint256 _orderId) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _orderId | uint256 | undefined |

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

### rounds

```solidity
function rounds(uint256) external view returns (uint256 startSaleTime, uint256 startTradeTime, bool roundStarted, bool tradeInProgress, uint256 price, uint256 emission, uint256 sold, uint256 traded)
```



*Get round&#39;s information by id.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| startSaleTime | uint256 | undefined |
| startTradeTime | uint256 | undefined |
| roundStarted | bool | undefined |
| tradeInProgress | bool | undefined |
| price | uint256 | undefined |
| emission | uint256 | undefined |
| sold | uint256 | undefined |
| traded | uint256 | undefined |

### saleDuration

```solidity
function saleDuration() external view returns (uint256)
```



*Get sale duration in seconds.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### signOn

```solidity
function signOn(address _refer) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _refer | address | undefined |

### signOn

```solidity
function signOn() external nonpayable
```



*Signing on platform without refer. Emits a {SignOn} event.*


### startSale

```solidity
function startSale() external nonpayable
```



*Starting all subsequent sales. Emits a {SaleStarted} event.*


### startTrade

```solidity
function startTrade() external nonpayable
```



*Stoping &quot;saling&quot; part of round and starting &quot;trading&quot; part. Emits a {TradeStarted} event.*


### stopTrade

```solidity
function stopTrade() external nonpayable
```



*Stopping round. Emits a {TradeStopped} event.*


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

### tradeDuration

```solidity
function tradeDuration() external view returns (uint256)
```



*Get trade duration in seconds.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### users

```solidity
function users(address) external view returns (bool signed)
```



*Check is user signed.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| signed | bool | undefined |

### withdraw

```solidity
function withdraw(address _to, uint256 _amount) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _to | address | undefined |
| _amount | uint256 | undefined |



## Events

### OrderAdded

```solidity
event OrderAdded(uint256 orderId)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| orderId  | uint256 | undefined |

### OrderClosed

```solidity
event OrderClosed(uint256 orderId)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| orderId  | uint256 | undefined |

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

### SaleStarted

```solidity
event SaleStarted(uint256 roundId)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| roundId  | uint256 | undefined |

### SignOn

```solidity
event SignOn(address signer, address refer)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| signer  | address | undefined |
| refer  | address | undefined |

### SoldOnSale

```solidity
event SoldOnSale(uint256 roundId, address indexed buyer, uint256 amount)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| roundId  | uint256 | undefined |
| buyer `indexed` | address | undefined |
| amount  | uint256 | undefined |

### SoldOnTrade

```solidity
event SoldOnTrade(uint256 orderId, address indexed buyer, uint256 amount)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| orderId  | uint256 | undefined |
| buyer `indexed` | address | undefined |
| amount  | uint256 | undefined |

### TradeStarted

```solidity
event TradeStarted(uint256 roundId)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| roundId  | uint256 | undefined |

### TradeStopped

```solidity
event TradeStopped(uint256 roundId)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| roundId  | uint256 | undefined |



