        ��  ��                  �  ,   U I F I L E   ���    0	          <duixml>
	<element resid="ConnectPreCFEPage" id="atom(ConnectPreCFE)" sheet="ModernStyle" layout="borderlayout()" layoutpos="top" margin="rect(5rp,5rp,0rp,0rp)" active="pointer" accessible="true" accrole="grouping" accname="resstr(550)">
		<element id="atom(UnsecureWarning)" accessible="true" active="pointer" layout="borderlayout()" layoutpos="top">
			<RichText class="ContentText" layoutpos="left" padding="rect(0rp,15rp,0rp,5rp)" accessible="true" active="pointer" accrole="statictext" content="resstr(558)" ContentAlign="WrapLeft"/>
		</element>
		<element id="atom(DataUsageGroup)" layoutpos="none" layout="borderlayout()" active="pointer">
			<RichText id="atom(UsageTitle)" class="ContentText" layoutpos="top" active="pointer" content="resstr(590)"/>
			<RichText class="ContentText" layoutpos="top" id="atom(DataUsageCount)" accessible="true" active="pointer" accrole="statictext" contentalign="wrapleft"/>
			<touchhyperlink id="atom(ResetUsageBtn)" layoutpos="left" content="resstr(591)" accdefaction="click" shortcut="none" accessible="true" accrole="link"/>
		</element>
		<element layout="borderlayout()" layoutpos="top" active="pointer">
			<element layout="flowlayout()" layoutpos="top" padding="rect(4rp,8rp,0rp,5rp)" active="pointer">
				<touchcheckbox id="atom(AutoConnectCheckBox)" content="resstr(560)" accessible="true"/>
			</element>
			<element layout="borderlayout()" layoutpos="bottom" margin="rect(0rp,15rp,0rp,0rp)" active="pointer">
				<touchbutton id="atom(connectbutton)" layoutpos="right" content="resstr(555)" accname="resstr(553)" class="default" selected="true" shortcut="auto" accrole="pushbutton" accessible="true"/>
			</element>
		</element>
	</element>
	<element resid="DisconnectPreCFEPage" id="atom(DisconnectPreCFE)" sheet="ModernStyle" layout="borderlayout()" layoutpos="top" margin="rect(5rp,8rp,0rp,0rp)" active="pointer" accessible="true" accrole="grouping" accname="resstr(551)">
		<element id="atom(DataUsageGroup)" layoutpos="none" layout="borderlayout()" active="pointer">
			<RichText id="atom(UsageTitle)" class="ContentText" layoutpos="top" active="pointer" content="resstr(590)"/>
			<RichText class="ContentText" layoutpos="top" active="pointer" id="atom(DataUsageCount)" accessible="true" accrole="statictext" contentalign="wrapleft"/>
			<touchhyperlink id="atom(ResetUsageBtn)" layoutpos="left" margin="rect(0rp,0rp,0rp,15rp)" content="resstr(591)" accdefaction="click" shortcut="none" accessible="true" accrole="link"/>
		</element>
		<element layout="borderlayout()" layoutpos="bottom" margin="rect(0rp,15rp,0rp,0rp)" active="pointer">
			<touchbutton id="atom(disconnectbutton)" layoutpos="right" content="resstr(556)" accname="resstr(554)" class="default" selected="true" shortcut="auto" accrole="pushbutton" accessible="true"/>
		</element>
	</element>
	<element resid="NotConnectablePreCFEPage" id="atom(NotConnectablePreCFE)" sheet="ModernStyle" layout="borderlayout()" layoutpos="top" margin="rect(5rp,20rp,0rp,0rp)" active="pointer" accessible="true" accrole="grouping" accname="resstr(552)">
		<element layout="borderlayout()" layoutpos="top" margin="rect(0rp,0rp,0rp,20rp)" active="pointer">
			<RichText id="atom(NotConnectableText)" class="ContentText" layoutpos="top" active="pointer" accessible="true" accrole="statictext" accname="resstr(557)" ContentAlign="MiddleLeft | WrapLeft"/>
		</element>
		<touchbutton id="atom(connectbutton)" layoutpos="right" content="resstr(555)" accname="resstr(553)" class="default" shortcut="auto" accrole="pushbutton" accessible="true"/>
	</element>
	<element resid="ProxyCredsNeededPreCFEPage" id="atom(ProxyCredsNeededPreCFEPage)" sheet="ModernStyle" layout="borderlayout()" layoutpos="top" active="pointer" margin="rect(0rp,20rp,0rp,0rp)" accessible="true" accrole="grouping">
		<RichText id="atom(ProblemText)" class="ContentText" layoutpos="top" active="pointer" margin="rect(0rp,0rp,0rp,20rp)" content="resstr(596)" ContentAlign="WrapLeft" accrole="statictext" accessible="true"/>
		<touchbutton id="atom(ContinueButton)" layoutpos="right" content="resstr(597)" class="default" selected="true" shortcut="auto" accrole="pushbutton" accessible="true"/>
	</element>
	<stylesheets>
		<style resid="ModernStyle" base="ressheet(ImmersiveStyles, library(Windows.UI.Immersive.dll), Dark)">
			<if class="ContentText">
				<RichText foreground="buttontext"/>
			</if>
			<TouchHyperlink foreground="20190"/>
			<if mousewithin="true">
				<TouchHyperlink foreground="20063"/>
			</if>
			<TouchCheckbox foreground="buttontext"/>
		</style>
		<style resid="ModernStyleLight" base="ressheet(ImmersiveStyles, library(Windows.UI.Immersive.dll), Dark)">
			<if class="ContentText">
				<RichText foreground="buttontext"/>
			</if>
			<TouchHyperlink foreground="20190"/>
			<if mousewithin="true">
				<TouchHyperlink foreground="20063"/>
			</if>
			<TouchCheckbox foreground="buttontext"/>
		</style>
	</stylesheets>
</duixml>
 �  ,   U I F I L E   ���    0	          <duixml>
	<element resid="Credential Page" id="atom(CFECredentialPage)" layout="flowlayout()" accessible="true" sheet="ModernStyle" active="pointer" width="265rp" behaviors="PVL::AnimationTrap()" padding="rect(0rp, 20rp, 0rp, 0rp)">
		<element layout="Borderlayout()" id="atom(IDC_CREDENTIAL_GENERAL_ERROR)" layoutpos="none" visible="false" active="pointer" accessible="true">
			<RichText layoutpos="top" contentalign="wrapleft" content="resstr(573)" accrole="statictext" accessible="true">

</RichText>
			<element layout="Borderlayout()" padding="rect(0rp,20rp,0rp,16rp)" layoutpos="top" active="pointer" accessible="true">
				<touchhyperlink content="resstr(564)" id="atom(IDC_CREDENTIAL_BROWSER)" accdefaction="click" accessible="true" layoutpos="top">

</touchhyperlink>
			</element>
		</element>
		<element layout="flowlayout()" layoutpos="top" active="pointer" margin="rect(0rp,8rp,0rp,0rp)" accessible="true">
			<touchedit2 id="atom(IDC_CREDENTIAL_USERNAME_BOX)" PromptText="resstr(571)" PromptWithCaret="true" layoutpos="top" accessible="true" behaviors="Windows.UI.Popups::TouchEditContextMenu()">

</touchedit2>
		</element>
		<element layout="flowlayout()" active="pointer" padding="rect(0rp,20rp,0rp,4rp)" layoutpos="top" accessible="true">
			<touchedit2 id="atom(IDC_CREDENTIAL_PASSWORD_BOX)" PromptText="resstr(572)" PromptWithCaret="true" layoutpos="top" accessible="true" behaviors="Windows.UI.Popups::TouchEditContextMenu()">

</touchedit2>
		</element>
		<element layout="flowlayout()" padding="rect(0rp,30rp,0rp,20rp)" layoutpos="top" active="pointer" accessible="true">
			<touchhyperlink content="resstr(574)" id="atom(IDC_CREDENTIAL_ERROR_DETAILS_LINK)" accdefaction="click" accessible="true" layoutpos="none" visible="false">

</touchhyperlink>
		</element>
		<element layout="flowlayout()" id="atom(IDC_CREDENTIAL_ERROR_DETAILS_BLOCK)" active="pointer" accessible="true" layoutpos="none" visible="false">
			<RichText class="ErrorText" id="atom(IDC_CREDENTIAL_ERROR_CONTENT)" layoutpos="top" contentalign="wrapleft" accrole="statictext" accessible="true">

</RichText>
			<RichText class="ErrorText" id="atom(IDC_CREDENTIAL_ERROR_SUBCONTENT)" layoutpos="top" contentalign="wrapleft" accrole="statictext" accessible="true">

</RichText>
		</element>
	</element>
	<stylesheets>
		<style resid="ModernStyle" base="ressheet(ImmersiveStyles, library(Windows.UI.Immersive.dll), Dark)">
			<touchhyperlink constrainlayout="narrow" contentalign="wrapleft" foreground="20190"/>
			<RichText constrainlayout="narrow"/>
			<if class="ErrorText">
				<RichText foreground="themeable(gtc(DragDrop, 6, 0, 3803))"/>
			</if>
			<if keyfocused="true">
				<touchhyperlink contentalign="focusrect | wrapleft"/>
			</if>
		</style>
		<style resid="ModernStyleLight" base="ressheet(ImmersiveStyles, library(Windows.UI.Immersive.dll), Light)">
			<touchhyperlink constrainlayout="narrow" contentalign="wrapleft" foreground="20190"/>
			<RichText constrainlayout="narrow"/>
			<if class="ErrorText">
				<RichText foreground="themeable(gtc(DragDrop, 6, 0, 3803))"/>
			</if>
			<if keyfocused="true">
				<touchhyperlink contentalign="focusrect | wrapleft"/>
			</if>
		</style>
	</stylesheets>
</duixml>
     ,   U I F I L E   ���    0	          <duixml>
	<element resid="Connecting Page" id="atom(CFEConnectingPage)" layout="flowlayout()" sheet="ModernStyle" active="pointer" accessible="true" width="265rp">
		<element layout="borderlayout()" id="atom(PageContent)" class="PageContentPadding" layoutpos="top" active="pointer" accessible="true">
			<ModernProgressRing id="atom(IDC_PROGRESS)" class="ProgessRing" layoutpos="left" visible="true"/>
			<LiveText id="atom(IDC_CONNECTING)" contentalign="bottomleft|wrapleft" layoutpos="client" content="resstr(1001)" padding="rect(10rp,0rp,0rp,0rp)" accessible="true" accrole="statictext">

</LiveText>
		</element>
	</element>
	<stylesheets>
		<style resid="ModernStyle" base="ressheet(ImmersiveStyles, library(Windows.UI.Immersive.dll), Dark)">
			<if class="ProgessRing">
				<ModernProgressRing foreground="buttontext" height="20rp" width="20rp"/>
			</if>
			<if class="PageContentPadding">
				<element padding="rect(0rp,31rp,0rp,0rp)"/>
			</if>
			<if class="PageContentPaddingManaged">
				<element padding="rect(0rp,0rp,0rp,0rp)"/>
			</if>
		</style>
		<style resid="ModernStyleLight" base="ressheet(ImmersiveStyles, library(Windows.UI.Immersive.dll), Light)">
			<if class="ProgessRing">
				<ModernProgressRing foreground="buttontext" height="20rp" width="20rp"/>
			</if>
			<if class="PageContentPadding">
				<element padding="rect(0rp,31rp,0rp,0rp)"/>
			</if>
			<if class="PageContentPaddingManaged">
				<element padding="rect(0rp,0rp,0rp,0rp)"/>
			</if>
		</style>
	</stylesheets>
</duixml>
�  ,   U I F I L E   ���    0	          <duixml>
	<element resid="Could not Connect Page" id="atom(CFECouldnotConnectPage)" layout="flowlayout()" sheet="ModernStyle" active="pointer" accessible="true" width="265rp" padding="rect(0rp,20rp,0rp,0rp)">
		<element layout="Borderlayout()" layoutpos="top" active="pointer" accessible="true">
			<RichText id="atom(IDC_CONNECT_FAILURE_REASON)" content="resstr(1030)" layoutpos="none" class="WarningText" contentalign="wrapleft" margin="rect(0rp,22rp,0rp,0rp)" accessible="true">

</RichText>
		</element>
		<element layout="Borderlayout()" layoutpos="top" active="pointer" margin="rect(0rp,22rp,0rp,0rp)" accessible="true">
			<touchhyperlink id="atom(IDC_FAILED_CONNECTION_HELP)" content="resstr(1036)" accdefaction="click" shortcut="auto" accessible="true"/>
		</element>
	</element>
	<stylesheets>
		<style resid="ModernStyle" base="ressheet(ImmersiveStyles, library(Windows.UI.Immersive.dll), Dark)">
			<RichText constrainlayout="narrow"/>
			<if class="WarningText">
				<RichText foreground="themeable(gtc(DragDrop, 5, 0, 3803))"/>
			</if>
			<touchhyperlink constrainlayout="narrow" contentalign="wrapleft" foreground="20190"/>
			<if keyfocused="true">
				<touchhyperlink contentalign="focusrect | wrapleft"/>
			</if>
		</style>
		<style resid="ModernStyleLight" base="ressheet(ImmersiveStyles, library(Windows.UI.Immersive.dll), Light)">
			<RichText constrainlayout="narrow"/>
			<if class="WarningText">
				<RichText foreground="themeable(gtc(DragDrop, 5, 0, 3803))"/>
			</if>
			<touchhyperlink constrainlayout="narrow" contentalign="wrapleft" foreground="20190"/>
			<if keyfocused="true">
				<touchhyperlink contentalign="focusrect | wrapleft"/>
			</if>
		</style>
	</stylesheets>
</duixml>
  {  ,   U I F I L E   ���    0	          <duixml>
	<element resid="NULL SSID Page" id="atom(CFENullSsidPage)" layout="flowlayout()" sheet="ModernStyle" active="pointer" accessible="true" width="265rp" behaviors="PVL::AnimationTrap()">
		<RichText id="atom(IDC_MESSAGE_TEXT)" class="WarningText" layoutpos="none" margin="rect(0rp,0rp,0rp,11rp)" visible="false" contentalign="wrapleft" accrole="statictext" accessible="true">

</RichText>
		<element id="atom(IDC_EDIT_SSID_PADDING)" layout="flowlayout()" class="InputPaddingWithoutText" layoutPos="top">
			<touchedit2 id="atom(IDC_EDIT_SSID)" accname="resstr(563)" layoutpos="top" behaviors="Windows.UI.Popups::TouchEditContextMenu()"/>
		</element>
	</element>
	<stylesheets>
		<style resid="ModernStyle" base="ressheet(ImmersiveStyles, library(Windows.UI.Immersive.dll), Dark)">
			<RichText constrainlayout="narrow"/>
			<if class="WarningText">
				<RichText foreground="themeable(gtc(DragDrop, 5, 0, 3803))"/>
			</if>
			<if class="InputPaddingWithoutText">
				<element padding="rect(0rp, 4rp, 0rp, 4rp)"/>
			</if>
			<if class="InputPaddingWithText">
				<element padding="rect(0rp, 0rp, 0rp, 4rp)"/>
			</if>
		</style>
		<style resid="ModernStyleLight" base="ressheet(ImmersiveStyles, library(Windows.UI.Immersive.dll), Light)">
			<RichText constrainlayout="narrow"/>
			<if class="WarningText">
				<RichText foreground="themeable(gtc(DragDrop, 5, 0, 3803))"/>
			</if>
			<if class="InputPaddingWithoutText">
				<element padding="rect(0rp, 4rp, 0rp, 4rp)"/>
			</if>
			<if class="InputPaddingWithText">
				<element padding="rect(0rp, 0rp, 0rp, 4rp)"/>
			</if>
		</style>
	</stylesheets>
</duixml>
 g  ,   U I F I L E   ���    0	          <duixml>
	<element resid="Limited Connectivity Page" id="atom(CFELimitedConnectivityPage)" layout="flowlayout()" sheet="ModernStyle" active="pointer" accessible="true" width="265rp" padding="rect(0rp,20rp,0rp,0rp)">
		<element layout="Borderlayout()" layoutpos="top" active="pointer" accessible="true">
			<touchhyperlink id="atom(IDC_FAILED_CONNECTION_HELP)" content="resstr(1036)" accdefaction="click" shortcut="auto" accessible="true"/>
		</element>
	</element>
	<stylesheets>
		<style resid="ModernStyle" base="ressheet(ImmersiveStyles, library(Windows.UI.Immersive.dll), Dark)">
			<touchhyperlink constrainlayout="narrow" contentalign="wrapleft" foreground="20190"/>
			<if keyfocused="true">
				<touchhyperlink contentalign="focusrect | wrapleft"/>
			</if>
		</style>
		<style resid="ModernStyleLight" base="ressheet(ImmersiveStyles, library(Windows.UI.Immersive.dll), Light)">
			<touchhyperlink constrainlayout="narrow" contentalign="wrapleft" foreground="20190"/>
			<if keyfocused="true">
				<touchhyperlink contentalign="focusrect | wrapleft"/>
			</if>
		</style>
	</stylesheets>
</duixml>
 �  ,   U I F I L E   ���    0	          <duixml>

<element

resid="WISPrSignupPage"

id="atom(CFEWISPrSignupPage)"

layout="borderlayout()"

sheet="ModernStyle"

active="pointer"

width="265rp"

accessible="true"

padding="rect(0rp, 20rp, 0rp, 0rp)">

<RichText

id="atom(IDC_PROFILE_MISMATCH_WARNING_MESSAGE)"

class="WarningText"

layoutpos="none"

visible="false"

margin="rect(0rp,0rp,0rp,7rp)"

content="resstr(598)"

contentalign="wrapleft"

accrole="statictext"

accessible="true">

</RichText>

<element

layout="Borderlayout()"

layoutpos="top"

padding="rect(0rp, 16rp, 0rp, 4rp)"

accessible="true">

<TouchCommandButton

id="atom(IDC_SHOW_CREDENTIAL_PAGE)"

layoutpos="top"

margin="rect(0rp, 0rp, 0rp, 20rp)"

content="resstr(566)"

/>

<TouchCommandButton

id="atom(IDC_SIGNUP)"

layoutpos="top"

content="resstr(565)"

/>

</element>

</element>

<stylesheets>

<style resid="ModernStyle" base="ressheet(ImmersiveStyles, library(Windows.UI.Immersive.dll), Dark)"/>

<style resid="ModernStyleLight" base="ressheet(ImmersiveStyles, library(Windows,UI.Immersive.dll), Light)"/>

</stylesheets>

</duixml>

  