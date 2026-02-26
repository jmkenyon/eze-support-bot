const NETWORKQUICKSTART = `
---

SYSTEM REQUIREMENTS

What are the system requirements for Eze EMS? The recommended system requirements for optimal performance are Microsoft Windows 10 or later as the supported OS, commercially available PC hardware with the best available configuration and 8+ GB RAM recommended, and a broadband connection with consistent ping times less than 200 ms with a standard bandwidth recommendation of 5 Eze EMS installations per T1 where T1 equals 1.5 Mbps. Install all critical updates and security patches for Microsoft Windows before downloading Eze EMS.

---

INSTALLING EZE EMS

How do you install Eze EMS? Eze EMS currently offers 64-bit when downloading the software. Before installing, ensure you have full system administrative privileges including read-write control of the installation folder, and close all SS&C Eze or third-party applications. Navigate to https://www.ezesoft.com/downloads/download-ems and click the link to download from the Current Release section. Locate the downloaded .msi file and double-click it, clicking Run if requested. Click Next on the Setup window and again on the Custom Setup window. Select your installation type and features to install, then click Install. After successful installation, choose to launch Eze EMS or click Finish.

What are the three installation types for Eze EMS? Typical Installation is recommended and installs the Eze EMS application using the Graphical User Interface. Local Split Installation separates the Eze EMS application and your data files, with each user having their own preset user directory. Network Split Installation separates the EMS application and your data files, with a configurable user directory.

What optional features can be installed with Eze EMS? Eze EMS for Microsoft Excel allows you to view Market Data in Microsoft Excel, submit orders, view positions, and view balances using the Eze Market Data API. Eze EMS API Client allows you to synchronize Eze EMS with Eze EMS xAPIs.

---

SILENT INSTALLATION

How do you perform a typical silent install of Eze EMS? Download the latest .msi file from https://www.ezesoft.com/downloads/download-ems. Open Command Prompt and run the msiexec command with parameters including /i for the path to the installer, SPLITBUILD=No, TALINIFILE and NETINIFILE for the path to tal.ini and net.ini, INSTALLDIR for the install directory path, /qn for silent mode, and /L*v for the log file path. For example: msiexec /i "C:\Users\jsmith\Downloads\Eze-EMS64-2023.8.0.msi" SPLITBUILD=No TALINIFILE=C:\EzeEMS\ NETINIFILE=C:\EzeEMS\ INSTALLDIR=C:\EzeEMS\ /qn /L*v "C:\temp\msilog.txt". The log folder must already exist or install will fail silently.

How do you verify if a silent install succeeded? Open the log file such as C:\temp\msilog.txt. A successful install shows a message ending with "Installation completed successfully" while a failed install shows a message ending with "Installation failed." Neither successes nor failures are shown in the Command Prompt.

How do you perform a Local Split silent install? In a Local Split, user files such as tal.ini are installed in a predetermined location unique to each user, separately from system files in C:\Program Files\EzeEMS. Run msiexec /i with the path to the installer, SPLITBUILD=Yes, /qn for silent mode, and /L*v for the log file path. For example: msiexec /i "C:\Users\jsmith\Downloads\Eze-EMS64-2023.8.0.msi" SPLITBUILD=Yes /qn /L*v "C:\temp\msilog.txt".

How do you perform a Network Split silent install? In a Network Split, install and user files are local but Eze EMS System Files are installed on the network. Run msiexec /i with the path to the installer, SPLITBUILD=Net, TALINIFILE and NETINIFILE for local paths, INSTALLDIR for the network install path, /qn, and /L*v. For example: msiexec /i "C:\Users\jsmith\Downloads\Eze-EMS64-2023.8.0.msi" SPLITBUILD=Net TALINIFILE=C:\EzeEMS\ NETINIFILE=C:\EzeEMS\ INSTALLDIR=\\NETWORKFILES\Applications\EzeEMS /qn /L*v "C:\temp\msilog.txt".

---

UPGRADING EZE EMS

How do you upgrade Eze EMS to the latest version? Backup your page files so you do not lose your customized setups. Uninstall the current version of Eze EMS which is required before installing the new 64-bit version. Then follow the standard Installing Eze EMS steps. Ensure you have full system administrative privileges and close all applications before beginning.

---

CLOUD STORAGE

What is Eze EMS Cloud Storage? Eze EMS offers the ability to save configurations, views, and files to the Microsoft Azure cloud. You can store and retrieve data from anywhere, allowing access to backups when your primary device is unavailable. Two modes are available: Automatic Cloud Storage which automatically backs up and Manual Cloud Storage which requires manual saves.

What network configuration is required for Eze EMS cloud storage? Add the following domain to your whitelist to allow traffic: rtcloudprod.blob.core.windows.net via port 443 over http or https. Contact your SS&C Eze client service representative for questions about whitelisting.

How do you enable automatic cloud storage in Eze EMS? Navigate to Tools > Configuration and click the Backup and Sync tab. Select the "Turn on Automatic Backup" checkbox. By default, "Backup to Cloud (recommended)" is selected. You can save up to ten most recent backup instances. Optionally select "Always check for newer versions in cloud" in Sync Settings to auto-check for latest backup on login, then click OK.

How do you manually backup to the cloud in Eze EMS? Navigate to Page > Backup > Backup To Cloud. Enter a description in the "Enter Description for this Backup" field. Optionally select "Lock file to prevent Auto-Deletion when backup limit is reached" where you can have up to 5 locked backups from a 10 backup limit. Optionally select "Share page with other users in your domain." Click "Backup Now!" to save as a .zip file.

How do you restore a backup in Eze EMS? Navigate to Page > Restore > Restore From Cloud for cloud data or Restore From Disk for local data. Click Yes to close the current session and reload with cloud data. The application restarts and you enter credentials to login. Select data from the Cloud Backup List and click "Restore & Start RealTick" to load the selected backup.

---

ASSIGNING FULL ACCESS PRIVILEGES

How do you assign full access rights to the EzeEMS folder? After installing Eze EMS, navigate to the C:\ drive, right-click the EzeEMS folder, and click Properties. Go to the Security tab and click Edit. In Permissions for EzeEMS, click Add. Type the desired email address in the "Enter the object names to select" field and click OK. Select the newly added user and select the Allow checkbox for Full control and Modify, then click OK.

---

TROUBLESHOOTING INSTALLATION

What do you do if the Eze EMS installer runs instead of the application? This issue occurs when a third-party application was running during installation, causing the installer to run when you click the Eze EMS icon instead of the application launching. The solution is to shut down all applications and run the repair option in the installer, then reboot the machine.

What do you do if you get an "Install failed" error when launching Eze EMS? This error message says "The Install failed" followed by "tal/registry-request-failed" and occurs because you do not have rights to access the registry. The solution is that you need read access to a specific registry key, and the Windows Administrator must perform this change.

---

EZE EMS CLIENT SERVICE

How do you contact Eze EMS client service for support? Contact your SS&C Eze client service representative with the following information: EMS Username, EMS Domain, EMS Locale, First and Last Name, and Firm Name including Buy Side or Sell Side Name.

How do you export support files from Eze EMS? Click Help > Export Files for Support. Enter the save path in the "Export to Directory" field and ensure "Email the Exported Files" checkbox is selected. Click Export. A new email message addressed to EZE-ClientServices@sscinc.com appears with exported files attached. Include your EMS Username, Domain, Locale, name, and Firm Name in the email body.

---

FIREWALL CONFIGURATION

What ports does Eze EMS use? Eze EMS uses port 80, 443, and 1838. If going through a firewall, these ports need to be open for outbound TCP connections only. If using an HTTP proxy server, port 80 and 443 traffic uses your network settings through Internet Explorer browser, but Eze EMS does not support authentication on HTTP proxies. Port 1838 traffic should go directly through the firewall to the static IP subnets.

---

STATIC IP ADDRESSES AND DOMAIN WHITELISTING

What are the static IP address ranges for Eze EMS traffic? North America ranges are 63.75.60.0/22, 63.160.212.0/23, 63.160.214.0/24, 63.215.120.0/25, and 198.207.140.0/24. The Europe range is 193.201.255.0/24.

What domains need to be whitelisted for Eze EMS? IP subnets used by Eze EMS must be whitelisted at the firewall level and in some cases at proxy server level. The domains to whitelist are *.taltrade.com, *.realtick.com, *.ezesoft.com, and *.ezesoft.eu.

---

ADVANCED CONNECTIVITY TROUBLESHOOTING

How do you test Eze EMS connectivity using Ping? Ping tests if the connection between client and server is open. Open Command Prompt and enter ping beacon.taltrade.com. The connection is good if the result is zero packets lost and round trip time is less than 200ms. If ping returns "Request Timed Out" or round trip time exceeds 200ms, contact your internet service provider or SS&C Eze client service representative.

How do you test Eze EMS connectivity using Telnet? Telnet tests connection over a specific port. Telnet is not installed by default in Windows so you need to enable it through Start > Control Panel > Programs and Features, selecting "Turn Windows features on or off", checking Telnet Client, and clicking OK. To test, open Command Prompt and enter telnet beacon.taltrade.com followed by the port number such as 80, 443, or 1838. A blank screen means the connection is normal. "Connect failed" means the port is closed and you should contact your network administrator or SS&C Eze representative.

How do you test Eze EMS connectivity using Tracert? Tracert maps the route data takes to TAL servers, reporting the hostname and IP of every router with response times. Open Command Prompt and enter tracert beacon.taltrade.com. "Request Time Out" may simply mean a router is not configured to return trace results, and if the route continues normally then routing is fine. Times higher than 250ms indicate where the problem is likely occurring. Contact your ISP or SS&C Eze representative for routing issues.

What should you do if all connectivity tests pass but issues persist? If ping, telnet, and tracert results are all normal and you continue to experience issues, there may be problems with the flow of data back to your system. Contact your SS&C Eze client service representative for additional assistance.
`

export default NETWORKQUICKSTART;