const EMSQUICKSTART = `
EZE EMS QUICK START GUIDE KNOWLEDGE BASE
Eze EMS - Execution Management System (SS&C Eze / Eze Castle Software)

---

What is Eze EMS? Eze EMS is a high-speed, multi-broker execution management system that provides centralized access to liquidity venues for execution and tools for dynamically managing positions, portfolios, and trading risk across global equity, futures, and options markets. Key features include: global connectivity to 200+ brokers, exchanges, ECNs/MTFs, and dark pools; consolidated desktop for trading multiple asset classes (Equities, Futures, Options, FX, ETFs, CFDs); real-time data via Eze EMS Market Data or Bloomberg Desktop API; seamless integration with in-house systems via FIX or APIs for straight-through processing; and sophisticated trading tools for analysis, execution, and TCA.

Who is the intended audience for Eze EMS? Eze EMS is intended for buy-side traders who have a solid understanding of the financial services domain, investment concepts, knowledge of assets, the stock market, and trading, as well as anyone who would like an introduction to Eze EMS.

---

GETTING STARTED AND ACCESS

How do you log into Eze EMS? To log into Eze EMS: (1) Double-click the Eze EMS icon on your desktop or navigate from the Start menu. (2) Enter your User Name, Domain, Password, and Locale in the login window. (3) Click OK. (4) A green lock icon appears in the system tray. After the first login, you only need to enter your password. If you have AutoLogon permission, select the AutoLogon Next Time checkbox to skip login next time.

How do you change your Eze EMS password? To change your password: (1) Right-click the green lock in the system tray and select Change Password. (2) Enter your current password in the Old Password field. (3) Enter a new password in the New Password field, retype it in the Confirm Password field, and click OK.

What is Multi-Factor Authentication (MFA) in Eze EMS? MFA (also called 2FA) provides an additional security layer during Eze EMS and RealTick Extra login. It requires both your password and a One Time Password (OTP) sent via email or retrieved from an authenticator app (e.g., Microsoft Authenticator or Google Authenticator). Contact your SS&C Eze client service representative to enable MFA.

How do you set up MFA via email in Eze EMS? To enable email as MFA delivery: (1) Log in normally. (2) On the 2FA Configuration Page, select Email from the Delivery Preference drop-down. (3) Enter your email address. (4) Click Save. (5) Re-enter login credentials. A unique OTP will be sent to your email each time you log in.

How do you set up MFA via authenticator app in Eze EMS? To enable an authenticator app for MFA: (1) Log in normally. (2) On the 2FA Configuration Page, select Authenticator App from the Delivery Preference drop-down. (3) A QR code appears. (4) Scan the QR code with your authenticator app. (5) Click Save. (6) Re-enter login credentials. A unique OTP will be sent to your authenticator app each time you log in.

How do you use MFA to log into Eze EMS? (1) Enter your Username, Domain, Password, and Locale and click OK. (2) Retrieve the OTP from your configured method (email or authenticator app). (3) Enter the OTP in the Security Code field of the Step Two of Verification window and click OK. If using email and you don't receive an OTP, click Resend Code after one minute. If you enter an incorrect OTP, you are redirected to the login window to try again.

How do you access the 2FA Configuration Page? In Eze EMS: click Tools menu > Change 2nd Factor Authentication Settings, or right-click the green lock on the taskbar and select Change 2FA Settings. In RealTick Extra: click Configure 2FA Settings on the Home screen. The delivery preference applies to both Eze EMS and RealTick Extra.

---

INSTALLATION AND DIRECTORIES

What sub-directories are installed with Eze EMS? The Eze EMS install directory contains the following sub-directories: Analysis (preconfigured and user-saved studies), Data (daily application activities), Favorites (saved favorites and preconfigured windows), Help (context-sensitive Help system), Mail (TAL Mail files), Pages (saved pages with layouts and window arrangements), Parm (symbol lists, Market Minder, and MultiQuote layouts), Sounds (sound files for Alarms and Alerts), Temp (temporary files like MultiQuote/Market Minder layouts), and Trading (files for order actions).

---

ACCOUNTS

What types of accounts does Eze EMS support? Eze EMS supports four types of accounts: (1) Neutral – not associated with any routes. (2) Trading – associated with specific routes. (3) Multi-broker – associated with a selected firm or broker. (4) Virtual – a client-side pseudo-account representing a collection of real accounts.

Which Eze EMS windows require you to select an account? Charts, Market Minder, MarketMakers, MultiQuote, Order Entry, Slicer, TabView, and TurboOptions all require account selection.

How do you select an account in Eze EMS? You can select an account from a drop-down list in some windows, or from the menu: (1) Click the menu for the window (MarketMaker, MultiQuote, Charts, etc.) and click Select Account. (2) Select an account from the Available Accounts field and click OK.

What are Virtual Accounts in Eze EMS? Virtual accounts let you trade different currencies, routes, and securities for different accounts all in one account. Eze EMS automatically aggregates trades into appropriate accounts. Benefits include: consolidated order blotter view, aggregated positions, and aggregated account balances. Virtual accounts can include explicit account lists or wildcards. Note: Virtual Accounts are client-side only; Eze EMS cannot send an order to the trade server using a virtual account.

How do you configure a Virtual Account? (1) Click Virtual Account on the Select Account window. (2) Click New in the Virtual Account Dialog Manager. (3) Enter a name in Account Name. (4) Select accounts from Available Accounts using the arrow buttons. (5) Select a currency from Account Currency drop-down. (6) Click OK. The virtual account appears in the list of available accounts.

How do you set a default neutral account? Go to Trading > Order Entry Properties > Pairs and Spreads tab. Select NEUTRAL from the Default Neutral Account drop-down list and click OK. This default will appear in Staged Pair Order and Broker Pair Algo forms, and can be overridden.

---

WORKSPACE AND CUSTOMIZATION

What are the main components of the Eze EMS workspace? The workspace includes: Page (main area with customized or pre-configured window layouts), Window (displays information like charts, watch lists, blotters, order entry forms; supports tabs, docking, linking, cloning), Menu (Page, Design, Favorites, Trading, Pairs, Tools, Window, Help), Toolbar (displays window designs at top of page, can be moved and edited), and Docked Window (windows moved outside the mainframe).

How do you set page defaults in Eze EMS? Go to Tools > Configuration > Page tab. You can configure: Startup options (Do not load a Page, Load Most Recent Page, Load First Page, or Select Page to Load), Save page on exit, Embed layout files in pages and favorites, Stretch windows when frame is resized, Minimize detached windows when frame is minimized, Use grid when resizing windows, and Set page grid size.

How do you create a new page in Eze EMS? Click Page > New (or Shift + F2). A blank screen appears. Open desired windows from the Design menu. Click Page > Save As, enter a name, and click Save.

How do you open an existing page? Click Page > Open (or Alt + O). Select the page and click Open, or double-click the desired page. Default pages are available with the installation package.

How do you change window colors in Eze EMS? Go to Tools > Configuration > Colors/Fonts tab. Select Turn on Theme and choose a theme. You can change Background, Gradient, Text, Selected Rows colors. You can show Grid & Border, change Up Tick and Down Tick colors. Click OK to save or enter a name in Save As to create a new theme.

How do you hide a window title? Go to Tools > Configuration > Window Captions tab. Choose Hide, Show, or Only On Mouse Hover from the Window Caption drop-down. Choose Thick or Thin from Window Frame drop-down (Thin not available if Show is selected). Click OK.

How do you add or remove columns in Eze EMS? To add: right-click the column header > Add Column > select the desired field or search > click OK. To remove: right-click the column header > Hide Column, or right-click > Selected Columns and uncheck the column to remove. You can drag and drop columns by clicking the header and moving it.

How do you configure column layouts? Right-click the window > Column Layout Choices > Configure Column Layout (or press F5). Use Add Field to add fields, Add Analysis to add studies, and Edit/Delete/Move buttons to manage columns. Click OK. Save layouts via Column Layout Choices > Save Column Layout or Save Column Layout As (with .bvw extension).

How do you dock windows in Eze EMS? Right-click the window > Detach Window. Click the window header and drag it. Direction arrows appear in the center of the screen. Hover over the desired arrow and release the mouse when you see your desired docking area highlighted.

How do you link windows in Eze EMS? Right-click a MultiQuote or Market Minder > select Links. Select the window(s) to link (hold CTRL for multiple). Click OK. When you update a symbol in the first window, related data displays in the linked window.

---

FAVORITES

How do you add a favorite in Eze EMS? Open the desired window > Favorites menu > Add to Favorites (or right-click > Favorites > Add to Favorites). Enter a name. Options: Save Position (opens window in same place), Setup After Opening (opens setup window each time), Use As Default (creates this window when using the toolbar button). Click OK.

How do you edit favorites? Favorites menu > Edit Favorites. Select the Window Type, click a favorite, click Edit. Change the name and options, click OK. Use Move Up/Move Down to reorder. To delete, select the favorite and click Delete.

---

BASIC FEATURES

How do you configure hot keys in Eze EMS? Go to Trading > Order Entry Properties > Order Actions Manager. Click New to create a new Order Action, List Trading Action, Staged Pair Action, or Macro. In the New/Edit Action window, select desired options, click OK, and enter a name. To assign a hot key, select an action and press a keyboard combination (e.g., Ctrl+N) in the Hotkey field. Click OK.

How do you configure performance settings? Go to Trading > Order Entry Properties > Performance Options tab. Complete the desired settings and click OK.

How do you set currency defaults? Go to Tools > Configuration > Currency tab > Options. You can: select a home currency, set currency symbols, choose cross rate sources, enable static rate fallback, and show all currencies. Exchange rates are calculated in real time. You can also display fractional prices as LCD via Tools > Configuration > General tab > Display Fractional Prices as LCD.

How do you enable scripting in Eze EMS? Go to Tools > Configuration > Scripting tab. Options: Allow Scripting (enables scripting), Allow Order Entry Scripting (enables order scripting), Allow Unattended Script Orders (orders placed via scripting don't show dialogs; warnings are ignored and errors are logged), Require Password for Order Scripting.

How do you view permissions in Eze EMS? For application permissions: Help menu > Show Applications Perms. For trading permissions: Help menu > Show Trading Perms. Both open a web browser window displaying current permissions. Contact your SS&C Eze client service representative for permission questions.

---

PRINTING

How do you print in Eze EMS? Print all windows: Page menu > Print All (or Ctrl+Shift+P). Print specific window: click the window > Page > Print (or Ctrl+P). Print Screen: Page > Print Screen. Options include Windows Desktop, Application Only, Application Only (no cap), and Active Window. Scaling options: Best Fit or Snap to Printer. You can also output to a bitmap file.

---

MONITORING MARKET PERFORMANCE

How do you create a Watch List? Click Market Minder on the Design menu. Select WatchList from the Minder Type drop-down. In the Symbols tab, enter symbols one at a time and click Add. In the Miscellaneous tab, enter a window title, click OK. Select an account if prompted. You can configure display options by right-clicking > Display Options, and configure columns via F5 or Column Layout Choices.

How do you create a Chart in Eze EMS? Click Chart on the Design menu. Enter one or more symbols and click Add. Make selections in Chart Selection, Date Selection, and Appearance panes. Click OK. Charts display time on the x-axis and price on the y-axis. Data criteria includes time intervals (Intraday, Daily, Weekly, Monthly, Seasonal, Time and Sales) and price criteria (Bids Only, Asks Only, Bid & Asks). The Chart window provides real-time tracking for Trades, Intraday Bars, Daily/Weekly/Monthly Bars, and Tick/Volume Bars.

How do you create a Table in Eze EMS? Click Table on the Design menu. Type a symbol and click Add (one symbol at a time). Make selections in Chart Selection, Date Selection, and Appearance. Click OK. Tables display data numerically in rows and columns for intraday, daily, weekly, or monthly time periods, including volume, open interest, exchange info, and technical studies.

How do you open a News Window? Click News on the Design menu. Configure Quick Search Criteria (keywords, categories, symbols, sources, pages) and click OK. The News window has: Toolbar (filter controls), Headline Panel (incoming headlines), and Story Panel (story for selected headline). Configure via right-click > Configure or News menu > Configure or F6.

How do you open the Web Browser in Eze EMS? Click Web Browser on the Design menu. Type the web address in the Current URL field and click OK. The Web Browser loads within Eze EMS.

How do you track Corporate Actions? Click Corporate Actions on the Design menu. Type a symbol, select an action type, choose date criteria (format MM/DD/YYYY), and click Search. Tracks dividends, stock splits, IPOs, and other stock activity.

---

ALARMS AND ALERTS

How do you create an Alarm in Eze EMS? Click RealTick Alarms on the Design menu. In Symbol Selection, choose Symbol Criteria, Symbol File, or Server Scan. Configure Filter Parameters, General Settings, and Sounds tabs. Click OK. Alarms notify you when a security's last price, net change, bid, offer, high, low, volume, new high, or new low meets specified conditions.

What types of Order Alerts does Eze EMS offer? Three types: Standard Order Alerts (defined per Account/Customer, triggered by order events), Staged Order Alerts (also per Account/Customer), and Advanced Order Alerts (defined per user, check orders on a timer for conditions). Configure via Trading > Order Entry Properties > Order Alerts tab.

How do you create an Order Alert? In the Order Alerts tab, click New. Select an account (or Select ALL). Select a customer (or Select All). Click OK. The rule is auto-enabled. Configure settings in the Alerts for Selected Rule pane, click OK. You can clone rules, apply settings across multiple rules using Ctrl+select and Apply.

How do you configure Advanced Order Alerts? In the Order Alerts tab, click Configure Advanced Alerts. Choose an alert type from the Alerts drop-down. Select accounts via the Account Selection window. Customize settings, click OK. Enable/disable all advanced alerts per rule via the Enable All Advanced Order Alerts checkbox in the Other pane.

---

TICKER AND TIME & SALES

What types of Tickers does Eze EMS offer? Three types: Jet Ticker (quotes scroll horizontally right to left), Cascade Ticker (quotes scroll vertically, newest at top or bottom), and Grid Ticker (columns with vertical scrolling). Create via Design > Ticker. Configure Display Options, Data Source (Symbol Criteria, Symbol List, or Symbol File), and Trades and Quotes to Show.

How do you create a Time & Sales report? Click Time & Sales on the Design menu. Type the symbol and date. Click OK. Displays all transactions for a symbol during a particular trading day.

---

QUOTEBOARD

What is QuoteBoard in Eze EMS? QuoteBoard provides real-time quotes for equities, options, futures, and other securities in a one-symbol-per-tile layout (vs. spreadsheet style). It shows Open, High, Low, Last, Net Change, and Total Daily Volume. Double-click a tile to bring up the Order Entry window. Supports RIC, Bloomberg (BBG), and TAL symbology.

How do you add and configure QuoteBoard? Click QuoteBoard on the Design menu. Enter symbols and click Add, then OK. To configure tiles: right-click tile > Configure Tiles. Options include Add Field, Edit, reorder fields, Show Candlestick, and Show Country Flag. Color scheme is configured via Tools > Configuration > Colors/Fonts tab.

---

TCA BENCHMARKS

What TCA benchmarks does Eze EMS offer? Eze EMS offers: Order Benchmark Value, Order Net P&L (also in BPS and CPS), Order Realized P&L (also in BPS and CPS), Order Unrealized P&L (also in BPS and CPS), Target 10-Day ADV Percent (also 5/20/50/200-day), Participation Rate, Duration VWAP, Last Market, Last Market (normalized), Order MKT VWAP Delta, Original VWAP, Original Volume, Volume Delta, Liquidity Indicator, and Trade Momentum.

How do you add TCA benchmark columns? Open Column Configuration (right-click blotter > Column Layout Choices > Configure Column Layout, or F5). Select desired TCA benchmarks. If not visible, click Add Field, go to Category tab, select "tca" or search. Select fields (Ctrl+click for multiple), click OK.

---

CREATING AND MANAGING ORDERS

What are the two primary ways to create orders in Eze EMS? (1) Order Entry Forms – can be embedded into any window (MarketMaker, Market Minder, etc.) or used as pop-ups. (2) Create Ticket Forms – accessed via Trading menu, opens stand-alone forms not associated with any window.

How do you add an embedded Order Entry Form? Press F7, or right-click the window > Show Windows > Order Entry Screen, or use the window's menu > Show Windows > Order Entry Screen. To change the form type, right-click the Order Entry Form > System Order Forms and select the desired type.

How do you configure pop-up Order Entry Forms? In Market Minder: right-click > press F4 > Miscellaneous tab > set Double Click Action to Popup Order Entry, click OK. Customize the default pop-up type via Trading > Order Entry Properties > Miscellaneous > Default Order Entry Popup Form drop-down.

How do you create a custom Order Entry Form? (1) Open an Order Entry Form and choose the closest System Order Form. (2) Right-click > Turn Edit Mode on. (3) Move controls by dragging, add new controls via right-click > Add Controls, delete with keyboard Delete key. (4) Right-click > Reorder Controls to set tab order. (5) Right-click > Turn off Edit Mode > click Yes to save > enter a name and click Save.

What Create Ticket Forms are available? Staged Order Ticket, Standard Order Ticket, Bond Order Ticket, Bracket Order Ticket, and Cross Order Ticket. If configured for OMS mode, the EMS/OMS Integration Staged Order Form is also available. Access via Trading > Create Ticket Form.

How do you create Order Entry Default Rules? Go to Trading > Order Entry Properties > Order Entry Default Rules tab. Click New. Enter a Rule Description. Choose Rule-based (set Security Types and Exchanges) or Symbol List (enter symbols). Click OK. Configure default values in the Defaults for Selected Rule pane, click OK.

---

ORDER ORIGINATION

How do orders get into Eze EMS? Orders can be generated internally within Eze EMS, or flow in from external applications including Microsoft Excel, Eze EMS API, and Order Management Systems (OMS). The most common method is staging orders from an OMS via FIX. Orders appear on the blotter ready to be acted upon. Some users enable claiming so traders can declare intentions before another trader picks up the order. Orders can also be staged internally without sending to market.

---

MARKETMAKER

What is the MarketMaker window? The MarketMaker window displays market activity for a selected symbol, including Level 2 quotes, regional quotes, trade events, and order position in the market queue. You can enter/modify/cancel orders, view consolidated order books, and use interactive books. My Orders Only shows your live order positions; Show Other User's Trader ID shows algo/cash orders claimed by other users.

How do you create a MarketMaker window? Click MarketMakers on Design menu. Enter a symbol and select Auto-Detect, Market Depth/Level 2 Quotes, or Regional Exchange Quotes. Configure columns in User Interface Settings tab. Set Order Entry Properties. Enter a window title in Miscellaneous tab. Click OK. Enter orders via the embedded Order Entry Form; default order is LMT (select price from Standard Depth View) or MKT.

---

MARKETMINDER AND BLOTTERS

What is the Market Minder? Market Minder provides various blotters and views including: WatchList, List Trader/TicketMinder, Account Balances Minder, BasketMinder, Options Risk Minder, Order Blotter, Aggregated Order Blotter, Pairs Blotter, Position Blotter, Aggregated Position Blotter, Regional Quotes Minder, and ChainMinder. Use it to stage trades, upload orders from Excel or API, and split orders across brokers.

What is the Order Blotter? The Order Blotter displays staged orders created in Eze EMS or received via FIX, API, or Excel. Send orders by right-clicking > Create Single Ticket, or using Create Buy/Create Sell buttons. Filter orders via Minder Setup, right-click > Setup Filter, or F9.

How do you create a List Trader? Click Market Minder on Design menu. Select TicketMinder/ListTrader from Minder Type. Enter a window title and click OK. Click New to open the List Creation Manager. Select an Order Tag, enter orders or Load List, click OK. List Trading allows handling multiple orders simultaneously, creating calendar spreads, and crossing buy/sell orders.

How do you cross orders in List Trader? Select Buy and Sell orders. Right-click > Cross Orders. In the Bulk Cross window, enter Cross Type, Route, Broker Code, Crossing Account, and optional Message. Click Cross. Confirm in the Confirm Bulk Cross window. Only market orders and orders with available free quantity are eligible.

---

PAIRS TRADING

What types of pairs trades does Eze EMS support? Three types: Ratio staged pairs, Risk Arb staged pairs, and Relative Value staged pairs. Pairs can be staged from any certified OMS or created manually using the Staged Pairs Order form. Use the Pairs Blotter (Market Minder) and Pairs Trader tab (Pairs menu).

How do you create a Pairs Blotter? Click Market Minder on Design menu. Select Pairs Blotter from Minder Type. Enter a name in Miscellaneous tab, click OK. Click New on the toolbar to import pairs. Select pairs and click Open. Use Load Pairs to import more, click OK to send.

---

TURBOOPTIONS

What is TurboOptions? TurboOptions displays all available options for a given security. It provides: single dashboard view of options chain with bid/ask and strike prices, internal Volatility and Greeks calculations, and embedded Order Entry Form. Options are sorted by expiration with Puts and Calls in symmetrical view. Additional panes include Filter View, Spread View, Account View, and Regional View.

How do you create a TurboOptions window? Click TurboOptions on Design menu. Enter the option root/underlier symbol. Select Straight Options (for single leg) or Multi Exchange Options (for multi-leg). Configure settings, click OK. Enter orders via F7 or Show Windows > Order View.

How does Filter View work in TurboOptions? Filter View provides: Months (number of months displayed), Strikes (range around at-the-money, specified range, single strike, or all), and Options Expiry Buttons (specific expiration dates, Ctrl+click for multiple). Click More>> for additional filters like options style and extra expiration dates.

---

MULTIQUOTE

What is MultiQuote? MultiQuote displays Level 1 symbol data and account information for a single instrument or trading account. Layouts offer fundamental data, price data, and margin information. Can be customized and embedded in most windows. Edit Mode (F5) allows: drag fields to reposition, double-click to change properties, right-click > Edit Actions to insert data fields, text, or candlesticks.

---

BRACKET ORDERS

How do you enter a Bracket Order? Open Bracket Order Entry Form via Trading > Create Ticket Form > Bracket Ticket. Check "Always show this window when placing a bracket order." Enter symbol, select account. Configure entry order (MKT or LMT) and exit orders (LMT for profit, STP or Trailing STP for loss). Save exit strategies via Strategy field > Save. Click Place Orders. Confirm and click Send Order. Total profit volume must equal loss volume which equals entry volume. No special permissions required.

---

ORDER CANCEL ORDER (OCO)

What is an Order Cancel Order (OCO)? OCO links two orders so if one is filled, the other is automatically canceled. Typically placed on either side of the market to hedge on market movement. To create: on the Order Entry Form, click the arrow or press F7 > System Order Forms > OCO. Enter order info and click Place Orders. Symbols must be the same, but order legs can be on different routes.

---

BASKET ORDERS

How do you create and use Basket Orders? Import staged orders via List Creation Manager. Select orders > click Order Settings. Configure in Edit List Trading Parameters. Click Set Values to save or Execute Now to send. Save baskets via List Trader > Save Basket. Load via Load Basket. Execute: enter Basket Tag, choose Delta (buy/sell by weight multiple) or Target (target number of shares owned), select number of baskets, click Recalculate then Execute Basket.

---

CONFIGURATION FILES

What are Configuration Files in Eze EMS? Configuration files (.ini files) customize behaviors within Eze EMS. Create by writing and saving a .ini file to the Trading folder. Load via Trading > Order Entry Properties > Configuration Files tab. Click the three dots next to the field name (Broker Codes, Client Account, Portfolio Strategy Mapping) and select your .ini file.

---

HOT BUTTONS

How do you configure Hot Buttons? Hot buttons perform order entry actions from a toolbar in MarketMaker, Market Minder, or TurboOptions windows. Create a toolbar: right-click window > Show Toolbars > New Toolbar > Dynamic or Standard. Name the toolbar, add actions from Available Actions, click OK. Create buttons: right-click toolbar > Insert/Add New Button > Order Action or List Trading Order Action. Configure settings, save with a unique filename.

---

CANCELING ORDERS

How do you cancel an order in Eze EMS? In your Order Blotter, select the order to cancel. Right-click > Cancel Order. You can cancel the remainder of a partially filled order or an entire unfilled order.

---

ADVANCED ORDER TYPES

What advanced order types does Eze EMS offer? BBO (Best Bid Offer) – sets limit at opposite side of market. Conditional Order – held on computer until execution conditions met (must be signed in). Discretionary Order – broker determines price and volume breakdown. MID – limit order at midpoint of spread. Pegged Order – BBO that moves with market side, with worst-price limit. Reserve Order – buy/sell in increments without exposing full amount (sent to single broker). ARCA-only types: Preference Order (choose specific market maker), PostNoPref (traded on ARCA's book), Trailing Stop Order (stop at defined % or offset from current price).

---

ROUTING ORDERS

What order routing methods does Eze EMS offer? Algorithmic-Based Order Routing (via Eze EMS API, Excel, or broker algo routes), Routing to External Crossing Networks (BIDS, BlockCross, LiquidNet, Luminex, POSIT), Broker Algo Wheels, and RBOR (Rules Based Order Routing). Route types include: Cash desk (human execution), DMA (direct market access via sell-side infrastructure), and Algo routes (broker-defined algorithms). Each order can be split across multiple routes.

How does Algorithmic-Based Order Routing work? Create algorithms using Eze EMS API or Eze EMS for Excel. Select from the Strategy drop-down on Order Entry Form. When executed, the algorithm checks its parameters against market data and executes trades that fit. Eze EMS also supports broker algorithmic trading engines with configurable parameters. Contact your SS&C Eze representative to enable.

---

EXTERNAL CROSSING NETWORKS

What external crossing networks integrate with Eze EMS? BIDS, BlockCross, LiquidNet, Luminex, and POSIT. Orders staged in Eze EMS are automatically sent to selected networks as Day (conditional) orders while remaining live on the blotter. If a portion is routed to a broker, Eze EMS decreases the external cross quantity accordingly. All networks accept Market and Limit orders with Buy, Sell, or Sell Short sides. GTC orders marked as cross eligible are sent on a recurring basis.

How do you configure a default external crossing network? Go to Trading > Order Entry Properties > Miscellaneous tab. Select network(s) from Default External Cross Networks pane and set Max Shares Limit. Click OK. Selected networks appear as checkboxes in the Submit Staged Order form and are available in the List Creation Manager's Ext. Cross drop-down.

How does each external crossing network work? BIDS: cancel existing order manually, then firm up in BIDS interface; creates child order automatically. BlockCross: matches on price/quantity/time priority; sends placement request, user firms up in EMS. LiquidNet: shows negotiation window; pull back untraded quantity and negotiate. Luminex: like BlockCross; auto re-route if uncommitted quantity exceeds 5,000. POSIT: firm up in ITG POSIT interface; sends non-actionable alerts; cannot cancel reserve orders from EMS, must cancel from ITG interface.

---

BROKER ALGO WHEEL

What is a Broker Algo Wheel? A pre-defined list of broker routes that allows impartial, bias-reduced broker selection. You assign percentage weights to each route and choose sequential or randomized execution.

How do you create a Broker Algo Wheel? Go to Trading > Order Entry Properties > Virtual Routes tab (requires Virtual Routes permission). Click Add. Configure: Route Name, Security Type, % Weight Based On (Orders or Quantity), Order Type (Single-leg default), Region, Wheel Mode (Probability-based or Rotation), and Availability. Click OK.

How do you configure a Broker Algo Wheel? Select the algo wheel in Virtual Routes. In SubRoute Configuration, add: Account (broker route name), Route (broker route name), Strategy (saved strategy), and Weight (percentage). Total weight must equal 100%. All fields must be complete before closing.

How do you execute orders using a Broker Algo Wheel? In MarketMaker, select Virtual in the Route drop-down and select the algo wheel name from the Strategy drop-down. You can also configure hot buttons for each algo wheel for quick execution from List Trader and MarketMaker windows.

---

RBOR (RULES BASED ORDER ROUTING)

What is RBOR? Rules Based Order Routing (RBOR) automatically routes orders staged via FIX or API to available destinations based on inbound order parameters. Used by buy-side or sell-side firms to automate order workflow and focus on high-touch orders. Contact your SS&C Eze representative to configure.

What can RBOR do? Create connections to multiple brokers with multiple strategies. Route based on any order field and nest rules. Cancel orders based on criteria for one route. Cancel and reroute child orders based on time of day. Auto-route rejected orders to trading desk as staged orders. Rules can match specific field values, use logic operators (<, >, NOT, AND, OR), check field presence, % ADV, % away from market, or notional value.

What are common RBOR rules? Routing by Time Submitted (e.g., send to Route A during market hours, Route B otherwise). Routing by TIF (e.g., GTD/MOO/MOC to Route A, others to Route B). Routing by Volume (e.g., over 100K shares stay staged, under go to destination). Cancel and Resubmit (e.g., cancel and reroute if not filled by 4pm). Broker Rejects (parent stays staged if broker rejects). User Message (instructions to traders). % ADV (trade when threshold reached).

Can RBOR work with algorithms? Yes. RBOR rules can be configured to automatically route orders to broker algorithms. Once created with algo parameters and in production, the RBOR rule behaves like any other rule and auto-routes if conditions are met.

---

AUTOMATED TRADING

What is Eze EMS Automated Trading? Automated Trading lets you create and manage rules to automate straightforward, highly liquid orders. It allows focusing on high-touch trades and quickly responding to strategy changes and market conditions. Managed via Trading > Automated Trading (Rules Manager).

What are the sections of the Automated Trading Rules Manager? Status Message (whether staging matches production), Rules Filter (filter and preview conditions), Rule Actions (New Rule, Edit Rule, More Actions including Clone/Delete/Reset), and Production Management (view rules, switch Staging/Production, manage priority via drag and drop).

How do you add a new automated trading rule? Open Trading > Automated Trading. Click New Rule. Enter Rule Summary: Rule Name, Description, Account, Customer (sell-side only), Security Type, Region. Set Rule Conditions using And/Or logic, fields (Symbol, Exchange, 20-Day ADV, etc.), operators, and values. Add conditions via New Condition or New Group. Set Rule Action: Sub Account, Route, Strategy. Click Save. The rule is added to Staging (disabled by default).

How do you manage Staging and Production rules? New rules go to Staging, disabled by default. Set priority by drag and drop. Enable rules via checkbox. Click Send to Production to make enabled rules active. Use Save to retain configuration without activating. Use Discard Changes to revert. Pause All Rules stops evaluation (already-routed orders continue filling). Changes to Production must be made via Staging first.

How do you configure a dedicated automated trading blotter? Create Market Minder > select ListTrader. Open Order Filtering Setup (MarketMinder > Setup Filter). Select Turn order filtering on. Add Auto Routed Order and Curr Status filters. Select Separate Staged/Live Statuses. Click OK. Add the Automated Trading Rule Name column to see which rule executed each child order.

What is the automated trading use case example? A rule named CS_VWAP routes to Credit Suisse VWAP for North America. Conditions: notional ≤ $500,000, quantity ≤ 5,000, and 20-Day ADV ≤ 2%. From a loaded list: AAPL and JPM are excluded (exceed quantity), VOD.LSE and BMW.ETR excluded (non-NAMR region), TSLA excluded (notional exceeds $500K), AIQ excluded (illiquid, fails ADV check). Only MSFT and GE meet all conditions and are automatically routed.

---

MARKET DATA AND ROUTING OVERVIEW

What market data options does Eze EMS support? Real-time market data via Eze EMS Market Data, Bloomberg Desktop API, or a combination. Popular tools include Time & Sales, Charts, and MarketMakers windows for viewing historical and current performance before routing decisions.

How does Eze EMS handle order monitoring? You can create multiple Market Minder types to view orders in blotters. Order Blotter shows sent orders; List Trader shows staged orders and children. Displays show execution amount, price, and status. Alerts can be configured for conditions like order creation, fills, or cancellations, presented as pop-ups, color changes, or sounds, scoped to your orders or firm-wide.

What is end-of-day reporting in Eze EMS? After market close, Eze EMS generates reports based on parameter lists by querying databases. Reports are sent to clients or third parties for clearing, reconciliation, and post-trade TCA purposes.
`

export default EMSQUICKSTART