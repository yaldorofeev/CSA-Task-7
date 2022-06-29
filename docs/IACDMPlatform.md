# IACDMPlatform









## Methods

### acdmTokenAddress

```solidity
function acdmTokenAddress() external view returns (address)
```



*Get address of acdm tokens contract.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### addOrder

```solidity
function addOrder(uint256 amount, uint256 price) external nonpayable
```



*Adding order on trading. Only signed users can call the function.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| amount | uint256 | of tokens (decimals is 6). |
| price | uint256 | of one token. Emits a {OrderAdded} event. |

### buy

```solidity
function buy(uint256 amount) external payable
```



*Buying tokens from platform.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| amount | uint256 | of tokens (decimals is 6). Emits a {SoldOnSale} event. |

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
function changeRefersSaleFee(uint256[] newFees) external nonpayable returns (bool)
```



*Changing fee for refers in sale round. This function can be called      from DAO contract only.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| newFees | uint256[] | is array of fee amounts that corresponds to refers        in refers chain. |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### changeRefersTradeFee

```solidity
function changeRefersTradeFee(uint256 newFee) external nonpayable returns (bool)
```



*Changing fee for refers in trade round. This function can be called      from DAO contract only.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| newFee | uint256 | is fee amount. All refers in a chain get a fee of this amount. |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

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

### getUserRefers

```solidity
function getUserRefers(address user, uint256 referNumber) external view returns (address)
```



*Get user&#39;s refers.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| user | address | address of user. |
| referNumber | uint256 | in chain of refers. |

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

### initSale

```solidity
function initSale() external nonpayable
```



*Starting the very first sale. Emits a {SignOn} event.*


### orders

```solidity
function orders(uint256 orderId) external view returns (address seller, uint256 price, uint256 amount)
```



*Get order.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| orderId | uint256 | . |

#### Returns

| Name | Type | Description |
|---|---|---|
| seller | address | undefined |
| price | uint256 | undefined |
| amount | uint256 | undefined |

### redeemOrder

```solidity
function redeemOrder(uint256 orderId, uint256 amount) external payable
```



*Buying tokens on trading.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| orderId | uint256 | . |
| amount | uint256 | of tokens (decimals is 6). Emits a {SoldOnTrade} event and {OrderClosed} event if all tokens were sold. |

### referSaleFees

```solidity
function referSaleFees(uint256 number) external view returns (uint256)
```



*Get refers sale fee.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| number | uint256 | of refer in chain. |

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
function removeOrder(uint256 orderId) external nonpayable
```



*Removing order from trading. Only owner of order can remove.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| orderId | uint256 | . Emits a {OrderClosed} event. |

### rounds

```solidity
function rounds(uint256 roundId) external view returns (uint256 startSaleTime, uint256 startTradeTime, bool roundStarted, bool tradeInProgress, uint256 price, uint256 emission, uint256 sold, uint256 traded)
```



*Get round&#39;s information by id.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| roundId | uint256 | undefined |

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
function signOn(address refer) external nonpayable
```



*Signing on platform with refer.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| refer | address | . Emits a {SignOn} event. |

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
function users(address user) external view returns (bool signed)
```



*Check is user signed.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| user | address | address of user. |

#### Returns

| Name | Type | Description |
|---|---|---|
| signed | bool | undefined |

### withdraw

```solidity
function withdraw(address to, uint256 amount) external nonpayable
```



*Withdrawing profit from the contract.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| to | address | - address to that witdrow made. |
| amount | uint256 | of eth. |



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



