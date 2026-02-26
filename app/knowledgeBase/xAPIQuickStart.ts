const XAPIQUICKSTART = `
---

What is the Eze EMS xAPI? Eze EMS xAPI is a robust and easy-to-use application by SS&C Eze that allows programmers and trading businesses to complete various trading workflows and access key information. It operates in conjunction with your existing Eze EMS account permissioning and entitlements and is not a standalone data feed application independent of Eze EMS. The Getting Started Guide covers version v2025.8.0.3104, released on December 24, 2025.

What are the key capabilities of Eze EMS xAPI? Key capabilities include automating order routing to smart order routers, algorithms, and other trading systems, routing orders to multiple brokers, dark pools, ATS, and MTFs via the Eze EMS Global Routing Network across asset classes, staging or routing single or pairs orders, accessing balances, positions, executions, and other order details, and accessing comprehensive list and basket capabilities.

What programming languages does EMS xAPI support? Although EMS xAPI can operate with all gRPC compatible languages, only Python language information is provided in the Getting Started Guide as an example. Refer to the gRPC documentation for more information on supported languages.

What are the use restrictions for Eze EMS xAPI? Users are prohibited from retransmitting any Eze Market Data using Eze EMS xAPI without express prior written consent of Eze EMS and the exchanges or other third-party data providers. Unauthorized retransmission is a breach of the end user agreement and will cause immediate termination of use. Non-display usage of Eze Market Data such as algorithmic or program trading is subject to exchange rules, regulations, and policies, and additional fees may apply. It is the sole responsibility of the user to determine whether their use is reportable or fee liable.

Where can you download the EMS xAPI files? You can download the necessary files from the GIT Repository, the Eze EMS Knowledgebase, or the EMS xAPI Portal which requires client access and login.

How do you contact Eze EMS xAPI developer support? Existing Eze EMS users can log in to access developer support documentation and sample code. You can contact SS&C Eze or request a demo to explore more about EMS xAPI. Email support is available at apisupport@ezesoft.com or by phone at +1 312-442-8122.

---

BUSINESS USE CASES

What is the Trade Execution API use case? With the Trade Execution API, you can add flexibility and customization to complex trading workflows. The broker-neutral trading APIs can seamlessly plug into sophisticated trading strategies and enable you to achieve best execution and value for your strategies from the markets.

What is the Market Data API use case? Eze EMS xAPI has a range of real-time and historical time-series and Market Data. Subject to the terms of your end user agreement and prior written consent of Eze and applicable exchanges and third-party providers, a buy-side business can consume data from the Market Data API into proprietary workflows to enhance predictive models and automated strategies to trade equities, futures, options, and more.

What specific use cases are supported on Eze EMS xAPI? Supported use cases include CRUD operations for Single and Pair Orders, Order Utility functions such as Checking Positions and Balances, and Security and Symbol Guides.

---

ABOUT gRPC

What is gRPC? gRPC is a modern open source high performance Remote Procedure Call framework that can run in any environment. It can efficiently connect services in and across data centers with pluggable support for load balancing, tracing, health checking, and authentication. It can use protocol buffers as both its Interface Definition Language and as its underlying message interchange format.

---

GETTING STARTED USING gRPC UI

How do you get started with the gRPC Web UI? Eze EMS xAPI users can launch a web-based interface called gRPC UI to review EMS xAPI services and methods and use request/response parameters directly through a web browser. The gRPC Web UI does not support streaming APIs such as SubscribeOrderInfo and SubscribeLevel1Ticks.

How do you use the gRPC Web UI to connect? Visit https://uatwebxapi.realtick.com/ to see the Swagger setup with all Eze EMS xAPI gRPC services. Navigate to the UtilityServices section and click connect API to open the Request Form pane. Enable the parameter checkbox to enter details, then enter your UserName, Domain, Password, and Locale details and click Invoke. If login is successful, a UserToken is generated in the Response pane. The generated UserToken is needed for all subsequent API calls.

What happens if you attempt too many logins on the gRPC Web UI? Your account will be temporarily locked for 3 minutes if you attempt to log in three times within 60 seconds, regardless of whether the attempts are successful or unsuccessful.

---

GETTING STARTED USING REST API

What tools can you use to interact with EMS REST APIs? You can leverage Swagger and Postman to interact with EMS REST APIs. Swagger UI provides an interactive browser-based interface for exploring endpoints, sending requests, and viewing responses. Postman offers a powerful desktop and web-based environment for building, testing, and automating API workflows with features like environment variables, scripting, and collection management.

How do you use the EMS REST API on Swagger? Visit https://emsuatxapi.taltrade.com:9001/index.html for the Swagger setup. Navigate to the Authentication APIs section and click connect API, then click Try it out to enable fields. Enter your UserName, Domain, Password, and Locale details and click Execute. If login is successful, a UserToken is generated in the Responses pane. You can set the user token as a bearer token by clicking Authorize, entering the token in the Value field, and clicking Authorize. Swagger does not support Subscribe APIs such as SubscribeOrderInfoRequest.

How do you use the EMS REST API on Postman? Visit the SSNC-Eze-EMS-xAPI path to launch the pre-configured Postman setup. Select the EMS xAPI environment from the top-right dropdown, then navigate to authentication > connect API > GET in the left index. Click the Params tab and enter UserName, Domain, Password, and Locale details, then click Send. If login is successful, a UserToken is generated. You can set the bearer token by selecting an API, clicking the Authorization tab, choosing Bearer Token from the Auth Type dropdown, and entering the token. Postman does not support Subscribe APIs.

---

MANAGED CLOUD PLATFORM (MCP)

How do you generate a MCP server using Postman? You can use Postman with the Managed Cloud Platform to generate a MCP server based on your selected APIs. Navigate to https://www.postman.com/explore/mcp-generator and click Search for APIs which requires login. Enter EMS xAPI REST and select the SS&C Eze EMS xAPI environment, then select desired APIs in the left index and enable checkboxes. Click Add Requests, then click Generate to create the downloadable MCP ZIP file. Download and unzip the file, open the README.md file, and follow instructions for next steps.

---

GETTING STARTED USING PYTHON CODE SAMPLES

What are the prerequisites for using EMS xAPI with Python? Python 3.9 must be installed. If not already installed, download from https://www.python.org/downloads/.

How do you set up EMS xAPI for Python development? Download and install Python, then run pip commands to install the required dependencies: grpcio==1.75.0, grpcio-tools==1.75.0, srp, pycryptodomex, and protobuf==6.32.1. Download proto files from the Git repository at https://github.com/ezesoft/xapi/tree/master/protos. Run grpc_tools.protoc commands to generate the _pb2.py and _pb2_grpc.py files for order, utilities, and market_data protos, replacing ../protos with your local directory path which appears twice in each command. Download the roots.pem file from the gRPC GitHub repository and save it in the same folder as the generated _pb2.py files.

What are the protoc commands to generate Python files for EMS xAPI? Run python -m grpc_tools.protoc -I../protos --python_out=. --grpc_python_out=. ../protos/order.proto for order files, python -m grpc_tools.protoc -I../protos --python_out=. --grpc_python_out=. ../protos/utilities.proto for utilities files, and python -m grpc_tools.protoc -I../protos --python_out=. --grpc_python_out=. ../protos/market_data.proto for market data files. This generates order_pb2.py, order_pb2_grpc.py, utilities_pb2.py, utilities_pb2_grpc.py, market_data_pb2.py, and market_data_pb2_grpc.py.

---

CONNECTING AND DISCONNECTING

How do you establish a standard connection to EMS xAPI? To establish a secured connection you need the server's host IP address, port number, and a local roots.pem root certificates file. Import utility modules including grpc, utilities_pb2 as util, and utilities_pb2_grpc as util_grpc. Create a stub with TLS encryption by reading roots.pem, creating a grpc.secure_channel with ssl_channel_credentials, and creating a UtilityServicesStub. Authenticate using util_stub.Connect with a ConnectRequest containing UserName, Domain, Password, and Locale. On successful login you receive a unique glx2 UserToken that must be provided in all subsequent calls. The server details and authentication credentials are provided by SS&C Eze.

What Python code is used to connect to EMS xAPI? Import grpc, utilities_pb2 as util, and utilities_pb2_grpc as util_grpc. Read the roots.pem file with open(r'.\roots.pem', 'rb') as f: cert = f.read(). Create a secure channel with channel = grpc.secure_channel('SERVER:PORT', grpc.ssl_channel_credentials(root_certificates=cert)). Create the stub with util_stub = util_grpc.UtilityServicesStub(channel). Connect with connect_response = util_stub.Connect(util.ConnectRequest(UserName='USER', Domain='DOMAIN', Password='PASSWORD', Locale='LOCALE')).

How do you disconnect from EMS xAPI? Verify login succeeded and disconnect by checking if connect_response.Response equals 'success', then calling disconnect_response = util_stub.Disconnect(util.DisconnectRequest(UserToken=connect_response.UserToken)). Print the disconnect result with print('Disconnect result: ', disconnect_response.ServerResponse).

What fields are required for the EMS xAPI Connect request? The required fields are UserName which is a string for a valid user name, Domain which is a string for a valid domain name, Password which is a string for a valid password, and Locale which is a string for the region the user wants to connect such as AMERICAS or ASIA.

What is the account lockout policy for EMS xAPI login? Your account will be temporarily locked for 3 minutes if you attempt to log in three times within 60 seconds, regardless of whether the attempts are successful or unsuccessful.

---

SRP LOGIN METHOD

What is SRP login in EMS xAPI? Secured Remote Password (SRP) is a mechanism that allows users to authenticate without passing the password to the server. By implementing SRP support in the EMS xAPI server, you can send a hash-coded password during login. Your domain must be SRP enabled to use SRP login. Contact your SS&C Eze client service representative for assistance.

What APIs are used for SRP login? The SRP login method uses StartLoginSrp and CompleteLoginSrp APIs. Use the code snippet from the Git repository to login via SRP method.

What fields are required for SRP login? The required fields are Identity which is a valid user identity in the format username@domain, srpTransactId which is a unique transaction ID per user, strEphA and strMc which are specific to SRP6 Protocol, UserName which is a valid user name, Domain which is a valid domain name, and Locale which is the region such as AMERICAS or ASIA.

Can you use both SRP and standard login? If your domain is SRP enabled, both SRP and standard login methods work. If your domain is not SRP enabled, only the standard login will work.

---

PLACING AN ORDER

How do you place an order using EMS xAPI Python code? Import order modules order_pb2 as ord and order_pb2_grpc as ord_grpc. Create a stub with ord_stub = ord_grpc.SubmitOrderServiceStub(channel). Submit the order with order_response = ord_stub.SubmitSingleOrder(ord.SubmitSingleOrderRequest(Symbol='TSLA', Side='BUY', Quantity=5000, Route='ROUTE', Account='ACCOUNT', OrderTag='MyOrderId', UserToken=connect_response.UserToken)). The route and account information are provided by SS&C Eze. The OrderTag property can optionally contain a unique identifier to match orders.

What are the required fields for SubmitSingleOrder? The required fields are Symbol which is a valid ticker symbol such as AAPL, IBM, or VOD.LSE, Side which can be BUY, SELL, or SELLSHORT where SELLSHORT requires the SHORT_LOCATE_ID extended field and Buy To Cover requires side BUY with the TO_OPEN_POS extended field, Quantity which must be a value greater than 0, Route which is the route name as shown in Eze EMS also referred to as Exit Vehicle, Account which uses semicolon-separated values for Trade or Neutral accounts such as TAL;TEST;USER1;TRADE or TAL;TEST;USER2;NEUTRAL, and UserToken which is the server-generated GUID from login.

What are the optional fields for SubmitSingleOrder? Optional fields include OrderTag as an order tag identifier, TicketId as a ticket ID, Staged which must be TRUE for staged orders, ClaimRequire which when TRUE requires a user in Eze EMS to claim the order, GoodFrom as a timestamp for when the order is first valid, TimeInForce which defaults to DAY, PriceType which defaults to Market, Price as the limit price, StopPrice as the stop price, UserMessage for user messages or notes, and ExpirationDate as the date when the order is no longer valid.

---

GETTING ORDER DETAILS

How do you get order details from EMS xAPI? You can request order activity to see status and details of an order. EMS xAPI offers both unary request-response and streaming interfaces. For unary, use GetTodaysActivityJson with activity_response = util_stub.GetTodaysActivityJson(util.TodaysActivityJsonRequest(IncludeUserSubmitOrder=True, UserToken=connect_response.UserToken)). For streaming, use SubscribeOrderInfo. By default all included filters are set as False.

How do you find a specific order by OrderTag? Use the OrderTag to find a specific order and lookup the EMS xAPI Order ID with xapi_order_id = df[(df['OrderTag']=='MyOrderId')]['OrderId'][0]. The EMS xAPI Order ID can be used to cancel and modify existing orders.

---

GETTING EXECUTION DETAILS

How do you get execution details from EMS xAPI? Use the same GetTodaysActivityJson interface with a different filter. Request fill activity by adding IncludeExchangeTradeOrder filter with activity_response = util_stub.GetTodaysActivityJson(util.TodaysActivityJsonRequest(IncludeExchangeTradeOrder=True, UserToken=connect_response.UserToken)).

---

CANCELLING AN ORDER

How do you cancel an order using EMS xAPI? Use the EMS xAPI Order ID retrieved from order details with cancel_response = ord_stub.CancelSingleOrder(ord.CancelSingleOrderRequest(OrderId=xapi_order_id, UserToken=connect_response.UserToken)).

---

SUBSCRIBING TO MARKET DATA

How do you subscribe to market data using EMS xAPI? You can request a market data snapshot and subscribe to future market data updates for Level 1 data. Import modules including Thread from threading, market_data_pb2 as md, and market_data_pb2_grpc as md_grpc. Since gRPC streaming is blocking, process data on a separate thread. Create the stub with md_stub = md_grpc.MarketDataServiceStub(channel). Request data with response = md_stub.SubscribeLevel1Ticks(md.Level1MarketDataRequest(Symbols=['TSLA'], Request=True, Advise=True, UserToken=connect_response.UserToken)). Set Request=True for a current snapshot and Advise=True for real-time updates.

What Python code handles market data from EMS xAPI? Define a handler function that iterates through tick responses, checking if tick.Trdprc1.DecimalValue equals 0.0 and continuing if so, otherwise printing the received market data with the symbol name and last price. Create and start a thread targeting the handler function with the response as argument. To shut down, call response.cancel() followed by t.join().

What fields are required for market data subscription? The required fields are UserToken which is the server-generated GUID from login, Symbols which are valid ticker symbols such as AAPL, IBM, or VOD.LSE, Request which should be set True for a current snapshot, and Advise which should be set True for real-time updates. RegionalExchangeIds is an optional field for regional exchange IDs.

---

FREQUENTLY ASKED QUESTIONS

How do you track an order in EMS xAPI? When creating an order, specify an external identifier in the OrderTag property. EMS xAPI includes the OrderTag in all update messages, allowing you to match orders between your system and theirs. When requesting order activity using either the Unary GetActivityJson or the Streaming SubscribeOrderInfo API, the OrderTag contains the value you specified. If no OrderTag was specified, match orders based on properties such as symbol and quantity.

What is the difference between Unary and Streaming APIs? GetActivityJson is a Unary RPC where you make a request and get a single response in a request-response pattern. SubscribeOrderInfo is a Streaming RPC where you make a request and receive data as it becomes available via an iterator object. Since streaming blocks the application, loop through the iterator from a dedicated thread. A good example is market data where you request live price updates and receive them as they arrive from the exchange.

Can Eze OMS/EMS users trigger automated compliance rules from EMS xAPI? Yes, you can trigger automated compliance rules and run automated compliance checks for EMS xAPI originated orders. This is configured in Eze OMS similarly to Eze EMS. The FID used is COMPLIANCE_USER_OPTION_FLAGS (31640) with Flag NO_TOUCH_AUTO_COMPLIANCE (1). Extended fields to include with the order are EZE_OMS_MANAGER, EZE_OMS_TRADER, and CUSTODIAN.

How do you check if your EMS xAPI session is active? Subscribe to the SubscribeHeartBeat API to know your connection status. On subscribing, you will be notified and requested to reconnect if an active connection with the server is terminated.

Why would your account be temporarily locked after multiple login attempts? Your account is temporarily locked for 3 minutes if you attempt to log in three times within a 60-second period, regardless of whether those attempts are successful or not. This security measure prevents unauthorized access and protects your account from potential misuse.

---

API REFERENCE - ORDER APIs

What are the Single Order APIs? The Single Order APIs are CancelSingleOrder which takes CancelSingleOrderRequest and returns CancelSingleOrderResponse, ChangeSingleOrder which takes ChangeSingleOrderRequest and returns ChangeSingleOrderResponse, SubmitAllocationOrder which takes SubmitAllocationOrderRequest and returns SubmitAllocationOrderResponse, SubmitSingleOrder which takes SubmitSingleOrderRequest and returns SubmitSingleOrderResponse, and SubmitTradeReport which takes SubmitTradeReportRequest and returns SubmitTradeReportResponse.

What are the Pair Order APIs? The Pair Order APIs are CancelPairOrder which takes CancelPairOrderRequest and returns CancelPairOrderResponse, ChangePairOrder which takes ChangePairOrderRequest and returns ChangePairOrderResponse, and SubmitPairOrder which takes SubmitPairOrderRequest and returns SubmitPairOrderResponse.

What are the Basket Order APIs? The Basket Order API is SubmitBasketOrder which takes BasketOrderRequest and returns BasketOrderResponse.

What are the Miscellaneous Order APIs? The Miscellaneous Order APIs include GetOrderDetailByDateRange, GetOrderDetailByOrderId, GetOrderDetailByOrderTag, GetUserAccounts, SubmitSeedData, SubscribeOrderInfo which is a streaming API, and SubscribeOrderInfoJson which is also a streaming API. Additional JSON Order APIs include GetOrderDetailByDateRangeJson which is a streaming response, GetOrderDetailByOrderIdJson, GetOrderDetailByOrderTag, and SubscribeOrderInfoJson.

---

API REFERENCE - MARKET DATA APIs

What are the Market Data APIs? The Market Data APIs include AddSymbols, GetDailyWeeklyMonthlyBars, GetDescriptionFromOptionSymbol, GetIntradayBars, GetLevel1MarketData, GetOptionChainForUnderlier, GetOptionsAndGreekData, GetOptionSymbolFromDescription, GetSecurityData, GetSymbolFromAlternateSymbology, and GetSymbolReferenceData.

What are the streaming Market Data APIs? The streaming Market Data APIs include GetSymbolsFromCompanyName, GetTickData, RemoveSymbols, SubscribeLevel1Ticks which takes Level1MarketDataRequest and returns a stream of Level1MarketDataResponse, SubscribeLevel2Ticks which takes Level2MarketDataRequest and returns a stream of Level2MarketDataResponse, UnSubscribeLevel1Data, and UnSubscribeLevel2Data.

---

API REFERENCE - UTILITY APIs

What are the Utility APIs? The Utility APIs include Connect, Disconnect, GetStrategyList, GetTodaysActivity, GetTodaysActivityBook, GetTodaysActivityJson, GetTodaysBalances, GetTodaysBrokenDownPositions, GetTodaysNetPositions, GetUserRouteProps, GetUserRoutes, and SubscribeHeartBeat.

---

API REFERENCE - SECURED REMOTE PASSWORD APIs

What are the Secured Remote Password APIs? The Secured Remote Password APIs are ChangePasswordSRP which takes ChangePasswordSRPRequest and returns ChangePasswordSRPResponse, CompleteLoginSrp which takes CompleteLoginSrpRequest and returns CompleteLoginSrpResponse, and StartLoginSrp which takes StartLoginSrpRequest and returns StartLoginSrpResponse. Only mandatory API fields are mentioned in the guide. Contact your SS&C Eze client service representative for a complete list of extended fields.
`

export default XAPIQUICKSTART;