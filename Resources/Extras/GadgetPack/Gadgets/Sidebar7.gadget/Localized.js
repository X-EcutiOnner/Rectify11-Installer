//This is the translation file. All strings that have to be localized are here, except
//the gadgetdescription in gadget.xml
//When you test the translation, note that you have to restart the sidebar process
//(click on "Hide all gadgets") so that changes take effect.

var Localized = [];

Localized['Language'] = "English"; //Name of language in its own language
Localized['LanguageCode'] = "en";
Localized['Translator'] = "English translation by Helmut Buhler";//Insert your name
Localized['IsRTL'] = "0";//right to left languages set to 1
Localized['IsTranslationComplete'] = "1";//ignore
Localized['EnableChristmashat'] = "1";//Show christmas hat in second half of december.

Localized['Name'] = "⁯7 Sidebar";//If english names arn't common in your language and you have a cool name in mind, feel free to change this. Don't forget to change it in gadget.xml, too.

Localized['Config'] = "⁯7 Sidebar - Options";

Localized['ID_Orientation'] = "Orientation";
Localized['ID_Autoshow'] = "Auto-show with cursor on side";
Localized['ID_AutoshowShift'] = "Show only with shift-key";
Localized['ID_TopMost'] = "Show sidebar always on top";
Localized['ID_AboveWindows'] = "Show above other windows";
Localized['ID_ShowOnDesktop'] = "Show sidebar on desktop";
Localized['ID_ShowInTaskbar'] = "Show icon in taskbar";
Localized['ID_Side'] = "Side:";
Localized['ID_Left'] = "Left";
Localized['ID_Right'] = "Right";
Localized['ID_MonitorText'] = "Monitor:";
Localized['ID_Monitor'] = "&Monitor";
Localized['ID_AutoWidth'] = "Set fixed width:";

Localized['ID_Design'] = "View";
Localized['ID_DefaultDesign'] = "Default";
Localized['ID_Color'] = "Color";//use adjectives here if possible, but also watch the space
Localized['ID_Transparency'] = "Transparent";
Localized['ID_Glass'] = "Theme color";
Localized['ID_EnableGlass'] = "Enable transparency";

Localized['ID_WindowManager'] = "Window-Manager";
Localized['ID_HideGadgets'] = "Hide gadgets when active";
Localized['ID_ShowExtrabuttons'] = "Show buttons for Window-Manager";
Localized['ID_AutoUpdatePreviews'] = "Refresh previews of minimized windows";

//Remove the clipboarder files in C:\Users\User\AppData\Local\Microsoft\Windows Sidebar\Gadgets\ClipboarderDLLs
//if you want this to show up in the settings dialog
Localized['ClipTitle'] = "Clipboarder Gadget";
Localized['ClipMessage'] = "Try this cool clipboard manager in only 4 mouse-clicks, you won't regret it ;)";
Localized['ClipUrl'] = "https://tiny.cc/clipboarder2";

Localized['ID_More'] = "More";
Localized['ID_Website'] = "Website";
Localized['ID_Feedback'] = "Feedback";
Localized['Donate'] = "Donate";
Localized['Version'] = "Version %i.%i (%i-bit%s)";
Localized['WebsiteUrl'] = "http://tiny.cc/7sidebar2";
Localized['FeedbackUrl'] = "https://8gadgetpack.net/Feedback.php";
Localized['DonateUrl'] = "https://8gadgetpack.net/donate.html";

Localized['IDOK'] = "&Close";

Localized['ShowPreview'] = "Alway&s show this preview";
Localized['ClosePreview'] = "Clo&se preview";
Localized['UpdatePreview'] = "Re&fresh preview";
Localized['TopMost'] = "Al&ways on top";//This is also used in the sidebar contextmenu and the current-window contextmenu
Localized['Opacity'] = "Opacit&y";
Localized['Percent20'] = "20%";
Localized['Percent40'] = "40%";
Localized['Percent60'] = "60%";
Localized['Percent80'] = "80%";
Localized['Percent100'] = "100%";
Localized['Process'] = "Proc&ess";
Localized['RestoreWindow'] = "&Restore window";
Localized['MinimizeWindow'] = "Minimize win&dow";
Localized['CloseWindow'] = "&Close window";

Localized['AddGadget'] = "&Add gadgets...";
Localized['AddGadgetTool'] = "Add gadgets..."; //Without &
Localized['ShowAllGadgets'] = "&Show all gadgets";
Localized['WindowManager'] = "W&indow-Manager";
Localized['ShowConfig'] = "&Options";
Localized['CloseAll'] = "&Hide all gadgets";
Localized['CloseSidebar'] = "&Close sidebar";

Localized['NextPage'] = "Next page";
Localized['PrevPage'] = "Previous page";
Localized['MinimizeCurrent'] = "Minimize current window";
Localized['CloseCurrent'] = "Close current window (right-click for more options)";

Localized['AddPreviewForCurrent'] = "&Add preview";
Localized['MuteCurrent'] = "Mute pro&cess";
Localized['SuspendCurrent'] = "&Suspend process";
Localized['ResumeCurrent'] = "&Resume process";
Localized['ResumeProcess'] = "Resume %s";//This is shown in the taskbar together with the suspended process. If grammar needs the verb after the processname, better use something like: "Resume: %s"
Localized['TerminateCurrent'] = "&End process";
Localized['PriorityCurrent'] = "Set priorit&y";
Localized['Priority1'] = "&Realtime";
Localized['Priority2'] = "&High";
Localized['Priority3'] = "&Above normal";
Localized['Priority4'] = "&Normal";
Localized['Priority5'] = "&Below normal";
Localized['Priority6'] = "&Low";

Localized['UpdateTitle'] = "7 Sidebar Update";
Localized['UpdateText'] = "7 Sidebar was successfully updated from version %i.%02i to %i.%02i. Have fun with the new features!";

//New in Version 1.60:

Localized['ErrorText'] = "7 Sidebar requires Windows 7 or later";

Localized['Info'] = "Info";
Localized['ID_NoAutoWidth'] = "Determine width automatically";
Localized['ID_Skin'] = "Skin:";
Localized['ID_ShowTopButtons'] = "Show buttons at top";
Localized['SelectPage'] = "Page &%i";

//1.70:

Localized['PMTitle'] = "Glassy CPU Monitor Gadget";
Localized['PMMessage'] = "Nice gadget that shows CPU and Memory usage fluently and uses almost no CPU time";
Localized['PMUrl'] = "http://tiny.cc/GlassyCPUMonitor";

//2.10:
Localized['8GadgetPackIntro1'] = "Don't like this sidebar?";
Localized['8GadgetPackIntro2'] = "Don't worry! You can drag the gadgets onto your desktop. To close this sidebar, right-click on it and select \"Close sidebar\".";

//2.20:
Localized['AlignGadgets'] = "Align gadgets on:";
Localized['Top'] = "top";
Localized['Center'] = "center";
Localized['Bottom'] = "bottom";

Localized['UpdateTextNews'] =  "(In case you want to upgrade to Windows 10: It doesn't have gadget support, but I created a small tool to get them back: <a=\"bla\">8GadgetPack</a>)";
Localized['UpdateTextNews2'] = "(You can download the new version of <a=\"bla\">8GadgetPack</a> to update all gadgets and improve gadget support)";

//2.30:
Localized['ShowWindowManager'] = "Show Window-Manager";
Localized['Peek'] = "Enable Peek for previews";

//2.70
Localized['ID_Tip'] = "Multiple sidebars can be started in the Gadget Gallery. Use Win+G to switch between sidebars and Tab to switch between docked gadgets.";


