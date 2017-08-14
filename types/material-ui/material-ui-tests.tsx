import * as React from 'react';
import { Component, PropTypes } from 'react';
import * as ReactDOM from 'react-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { muiThemeable } from 'material-ui/styles/muiThemeable';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import { MuiTheme } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import AutoComplete from 'material-ui/AutoComplete';
import Avatar from 'material-ui/Avatar';
import Badge from 'material-ui/Badge';
import Checkbox from 'material-ui/Checkbox';
import Chip from 'material-ui/Chip';
import CircularProgress from 'material-ui/CircularProgress';
import DatePicker from 'material-ui/DatePicker';
import Dialog from 'material-ui/Dialog';
import Divider from 'material-ui/Divider';
import Drawer from 'material-ui/Drawer';
import DropDownMenu from 'material-ui/DropDownMenu';
import FlatButton from 'material-ui/FlatButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import LinearProgress from 'material-ui/LinearProgress';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import RefreshIndicator from 'material-ui/RefreshIndicator';
import SelectField from 'material-ui/SelectField';
import Slider from 'material-ui/Slider';
import Snackbar from 'material-ui/Snackbar';
import Subheader from 'material-ui/Subheader';
import SvgIcon from 'material-ui/SvgIcon';
import TextField from 'material-ui/TextField';
import TimePicker from 'material-ui/TimePicker';
import Toggle from 'material-ui/Toggle';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import { GridList, GridTile } from 'material-ui/GridList';
import { makeSelectable } from 'material-ui/List';
import { Menu } from 'material-ui/Menu';
import { Popover, PopoverAnimationVertical } from 'material-ui/Popover';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import { Step, Stepper, StepLabel, StepContent, StepButton } from 'material-ui/Stepper';
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation';
import {
    Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn, TableFooter
 } from 'material-ui/Table';
import { Tabs, Tab } from 'material-ui/Tabs';
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar';
// {{{ Generated with minodisk/gendts-material-ui-svg-icons
import _ActionAccessibility from 'material-ui/svg-icons/action/accessibility';
import _ActionAccessible from 'material-ui/svg-icons/action/accessible';
import _ActionAccountBalance from 'material-ui/svg-icons/action/account-balance';
import _ActionAccountBalanceWallet from 'material-ui/svg-icons/action/account-balance-wallet';
import _ActionAccountBox from 'material-ui/svg-icons/action/account-box';
import _ActionAccountCircle from 'material-ui/svg-icons/action/account-circle';
import _ActionAddShoppingCart from 'material-ui/svg-icons/action/add-shopping-cart';
import _ActionAlarm from 'material-ui/svg-icons/action/alarm';
import _ActionAlarmAdd from 'material-ui/svg-icons/action/alarm-add';
import _ActionAlarmOff from 'material-ui/svg-icons/action/alarm-off';
import _ActionAlarmOn from 'material-ui/svg-icons/action/alarm-on';
import _ActionAllOut from 'material-ui/svg-icons/action/all-out';
import _ActionAndroid from 'material-ui/svg-icons/action/android';
import _ActionAnnouncement from 'material-ui/svg-icons/action/announcement';
import _ActionAspectRatio from 'material-ui/svg-icons/action/aspect-ratio';
import _ActionAssessment from 'material-ui/svg-icons/action/assessment';
import _ActionAssignment from 'material-ui/svg-icons/action/assignment';
import _ActionAssignmentInd from 'material-ui/svg-icons/action/assignment-ind';
import _ActionAssignmentLate from 'material-ui/svg-icons/action/assignment-late';
import _ActionAssignmentReturn from 'material-ui/svg-icons/action/assignment-return';
import _ActionAssignmentReturned from 'material-ui/svg-icons/action/assignment-returned';
import _ActionAssignmentTurnedIn from 'material-ui/svg-icons/action/assignment-turned-in';
import _ActionAutorenew from 'material-ui/svg-icons/action/autorenew';
import _ActionBackup from 'material-ui/svg-icons/action/backup';
import _ActionBook from 'material-ui/svg-icons/action/book';
import _ActionBookmark from 'material-ui/svg-icons/action/bookmark';
import _ActionBookmarkBorder from 'material-ui/svg-icons/action/bookmark-border';
import _ActionBugReport from 'material-ui/svg-icons/action/bug-report';
import _ActionBuild from 'material-ui/svg-icons/action/build';
import _ActionCached from 'material-ui/svg-icons/action/cached';
import _ActionCameraEnhance from 'material-ui/svg-icons/action/camera-enhance';
import _ActionCardGiftcard from 'material-ui/svg-icons/action/card-giftcard';
import _ActionCardMembership from 'material-ui/svg-icons/action/card-membership';
import _ActionCardTravel from 'material-ui/svg-icons/action/card-travel';
import _ActionChangeHistory from 'material-ui/svg-icons/action/change-history';
import _ActionCheckCircle from 'material-ui/svg-icons/action/check-circle';
import _ActionChromeReaderMode from 'material-ui/svg-icons/action/chrome-reader-mode';
import _ActionClass from 'material-ui/svg-icons/action/class';
import _ActionCode from 'material-ui/svg-icons/action/code';
import _ActionCompareArrows from 'material-ui/svg-icons/action/compare-arrows';
import _ActionCopyright from 'material-ui/svg-icons/action/copyright';
import _ActionCreditCard from 'material-ui/svg-icons/action/credit-card';
import _ActionDashboard from 'material-ui/svg-icons/action/dashboard';
import _ActionDateRange from 'material-ui/svg-icons/action/date-range';
import _ActionDelete from 'material-ui/svg-icons/action/delete';
import _ActionDeleteForever from 'material-ui/svg-icons/action/delete-forever';
import _ActionDescription from 'material-ui/svg-icons/action/description';
import _ActionDns from 'material-ui/svg-icons/action/dns';
import _ActionDone from 'material-ui/svg-icons/action/done';
import _ActionDoneAll from 'material-ui/svg-icons/action/done-all';
import _ActionDonutLarge from 'material-ui/svg-icons/action/donut-large';
import _ActionDonutSmall from 'material-ui/svg-icons/action/donut-small';
import _ActionEject from 'material-ui/svg-icons/action/eject';
import _ActionEuroSymbol from 'material-ui/svg-icons/action/euro-symbol';
import _ActionEvent from 'material-ui/svg-icons/action/event';
import _ActionEventSeat from 'material-ui/svg-icons/action/event-seat';
import _ActionExitToApp from 'material-ui/svg-icons/action/exit-to-app';
import _ActionExplore from 'material-ui/svg-icons/action/explore';
import _ActionExtension from 'material-ui/svg-icons/action/extension';
import _ActionFace from 'material-ui/svg-icons/action/face';
import _ActionFavorite from 'material-ui/svg-icons/action/favorite';
import _ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import _ActionFeedback from 'material-ui/svg-icons/action/feedback';
import _ActionFindInPage from 'material-ui/svg-icons/action/find-in-page';
import _ActionFindReplace from 'material-ui/svg-icons/action/find-replace';
import _ActionFingerprint from 'material-ui/svg-icons/action/fingerprint';
import _ActionFlightLand from 'material-ui/svg-icons/action/flight-land';
import _ActionFlightTakeoff from 'material-ui/svg-icons/action/flight-takeoff';
import _ActionFlipToBack from 'material-ui/svg-icons/action/flip-to-back';
import _ActionFlipToFront from 'material-ui/svg-icons/action/flip-to-front';
import _ActionGTranslate from 'material-ui/svg-icons/action/g-translate';
import _ActionGavel from 'material-ui/svg-icons/action/gavel';
import _ActionGetApp from 'material-ui/svg-icons/action/get-app';
import _ActionGif from 'material-ui/svg-icons/action/gif';
import _ActionGrade from 'material-ui/svg-icons/action/grade';
import _ActionGroupWork from 'material-ui/svg-icons/action/group-work';
import _ActionHelp from 'material-ui/svg-icons/action/help';
import _ActionHelpOutline from 'material-ui/svg-icons/action/help-outline';
import _ActionHighlightOff from 'material-ui/svg-icons/action/highlight-off';
import _ActionHistory from 'material-ui/svg-icons/action/history';
import _ActionHome from 'material-ui/svg-icons/action/home';
import _ActionHourglassEmpty from 'material-ui/svg-icons/action/hourglass-empty';
import _ActionHourglassFull from 'material-ui/svg-icons/action/hourglass-full';
import _ActionHttp from 'material-ui/svg-icons/action/http';
import _ActionHttps from 'material-ui/svg-icons/action/https';
import _ActionImportantDevices from 'material-ui/svg-icons/action/important-devices';
import _ActionInfo from 'material-ui/svg-icons/action/info';
import _ActionInfoOutline from 'material-ui/svg-icons/action/info-outline';
import _ActionInput from 'material-ui/svg-icons/action/input';
import _ActionInvertColors from 'material-ui/svg-icons/action/invert-colors';
import _ActionLabel from 'material-ui/svg-icons/action/label';
import _ActionLabelOutline from 'material-ui/svg-icons/action/label-outline';
import _ActionLanguage from 'material-ui/svg-icons/action/language';
import _ActionLaunch from 'material-ui/svg-icons/action/launch';
import _ActionLightbulbOutline from 'material-ui/svg-icons/action/lightbulb-outline';
import _ActionLineStyle from 'material-ui/svg-icons/action/line-style';
import _ActionLineWeight from 'material-ui/svg-icons/action/line-weight';
import _ActionList from 'material-ui/svg-icons/action/list';
import _ActionLock from 'material-ui/svg-icons/action/lock';
import _ActionLockOpen from 'material-ui/svg-icons/action/lock-open';
import _ActionLockOutline from 'material-ui/svg-icons/action/lock-outline';
import _ActionLoyalty from 'material-ui/svg-icons/action/loyalty';
import _ActionMarkunreadMailbox from 'material-ui/svg-icons/action/markunread-mailbox';
import _ActionMotorcycle from 'material-ui/svg-icons/action/motorcycle';
import _ActionNoteAdd from 'material-ui/svg-icons/action/note-add';
import _ActionOfflinePin from 'material-ui/svg-icons/action/offline-pin';
import _ActionOpacity from 'material-ui/svg-icons/action/opacity';
import _ActionOpenInBrowser from 'material-ui/svg-icons/action/open-in-browser';
import _ActionOpenInNew from 'material-ui/svg-icons/action/open-in-new';
import _ActionOpenWith from 'material-ui/svg-icons/action/open-with';
import _ActionPageview from 'material-ui/svg-icons/action/pageview';
import _ActionPanTool from 'material-ui/svg-icons/action/pan-tool';
import _ActionPayment from 'material-ui/svg-icons/action/payment';
import _ActionPermCameraMic from 'material-ui/svg-icons/action/perm-camera-mic';
import _ActionPermContactCalendar from 'material-ui/svg-icons/action/perm-contact-calendar';
import _ActionPermDataSetting from 'material-ui/svg-icons/action/perm-data-setting';
import _ActionPermDeviceInformation from 'material-ui/svg-icons/action/perm-device-information';
import _ActionPermIdentity from 'material-ui/svg-icons/action/perm-identity';
import _ActionPermMedia from 'material-ui/svg-icons/action/perm-media';
import _ActionPermPhoneMsg from 'material-ui/svg-icons/action/perm-phone-msg';
import _ActionPermScanWifi from 'material-ui/svg-icons/action/perm-scan-wifi';
import _ActionPets from 'material-ui/svg-icons/action/pets';
import _ActionPictureInPicture from 'material-ui/svg-icons/action/picture-in-picture';
import _ActionPictureInPictureAlt from 'material-ui/svg-icons/action/picture-in-picture-alt';
import _ActionPlayForWork from 'material-ui/svg-icons/action/play-for-work';
import _ActionPolymer from 'material-ui/svg-icons/action/polymer';
import _ActionPowerSettingsNew from 'material-ui/svg-icons/action/power-settings-new';
import _ActionPregnantWoman from 'material-ui/svg-icons/action/pregnant-woman';
import _ActionPrint from 'material-ui/svg-icons/action/print';
import _ActionQueryBuilder from 'material-ui/svg-icons/action/query-builder';
import _ActionQuestionAnswer from 'material-ui/svg-icons/action/question-answer';
import _ActionReceipt from 'material-ui/svg-icons/action/receipt';
import _ActionRecordVoiceOver from 'material-ui/svg-icons/action/record-voice-over';
import _ActionRedeem from 'material-ui/svg-icons/action/redeem';
import _ActionRemoveShoppingCart from 'material-ui/svg-icons/action/remove-shopping-cart';
import _ActionReorder from 'material-ui/svg-icons/action/reorder';
import _ActionReportProblem from 'material-ui/svg-icons/action/report-problem';
import _ActionRestore from 'material-ui/svg-icons/action/restore';
import _ActionRestorePage from 'material-ui/svg-icons/action/restore-page';
import _ActionRoom from 'material-ui/svg-icons/action/room';
import _ActionRoundedCorner from 'material-ui/svg-icons/action/rounded-corner';
import _ActionRowing from 'material-ui/svg-icons/action/rowing';
import _ActionSchedule from 'material-ui/svg-icons/action/schedule';
import _ActionSearch from 'material-ui/svg-icons/action/search';
import _ActionSettings from 'material-ui/svg-icons/action/settings';
import _ActionSettingsApplications from 'material-ui/svg-icons/action/settings-applications';
import _ActionSettingsBackupRestore from 'material-ui/svg-icons/action/settings-backup-restore';
import _ActionSettingsBluetooth from 'material-ui/svg-icons/action/settings-bluetooth';
import _ActionSettingsBrightness from 'material-ui/svg-icons/action/settings-brightness';
import _ActionSettingsCell from 'material-ui/svg-icons/action/settings-cell';
import _ActionSettingsEthernet from 'material-ui/svg-icons/action/settings-ethernet';
import _ActionSettingsInputAntenna from 'material-ui/svg-icons/action/settings-input-antenna';
import _ActionSettingsInputComponent from 'material-ui/svg-icons/action/settings-input-component';
import _ActionSettingsInputComposite from 'material-ui/svg-icons/action/settings-input-composite';
import _ActionSettingsInputHdmi from 'material-ui/svg-icons/action/settings-input-hdmi';
import _ActionSettingsInputSvideo from 'material-ui/svg-icons/action/settings-input-svideo';
import _ActionSettingsOverscan from 'material-ui/svg-icons/action/settings-overscan';
import _ActionSettingsPhone from 'material-ui/svg-icons/action/settings-phone';
import _ActionSettingsPower from 'material-ui/svg-icons/action/settings-power';
import _ActionSettingsRemote from 'material-ui/svg-icons/action/settings-remote';
import _ActionSettingsVoice from 'material-ui/svg-icons/action/settings-voice';
import _ActionShop from 'material-ui/svg-icons/action/shop';
import _ActionShopTwo from 'material-ui/svg-icons/action/shop-two';
import _ActionShoppingBasket from 'material-ui/svg-icons/action/shopping-basket';
import _ActionShoppingCart from 'material-ui/svg-icons/action/shopping-cart';
import _ActionSpeakerNotes from 'material-ui/svg-icons/action/speaker-notes';
import _ActionSpeakerNotesOff from 'material-ui/svg-icons/action/speaker-notes-off';
import _ActionSpellcheck from 'material-ui/svg-icons/action/spellcheck';
import _ActionStars from 'material-ui/svg-icons/action/stars';
import _ActionStore from 'material-ui/svg-icons/action/store';
import _ActionSubject from 'material-ui/svg-icons/action/subject';
import _ActionSupervisorAccount from 'material-ui/svg-icons/action/supervisor-account';
import _ActionSwapHoriz from 'material-ui/svg-icons/action/swap-horiz';
import _ActionSwapVert from 'material-ui/svg-icons/action/swap-vert';
import _ActionSwapVerticalCircle from 'material-ui/svg-icons/action/swap-vertical-circle';
import _ActionSystemUpdateAlt from 'material-ui/svg-icons/action/system-update-alt';
import _ActionTab from 'material-ui/svg-icons/action/tab';
import _ActionTabUnselected from 'material-ui/svg-icons/action/tab-unselected';
import _ActionTheaters from 'material-ui/svg-icons/action/theaters';
import _ActionThreeDRotation from 'material-ui/svg-icons/action/three-d-rotation';
import _ActionThumbDown from 'material-ui/svg-icons/action/thumb-down';
import _ActionThumbUp from 'material-ui/svg-icons/action/thumb-up';
import _ActionThumbsUpDown from 'material-ui/svg-icons/action/thumbs-up-down';
import _ActionTimeline from 'material-ui/svg-icons/action/timeline';
import _ActionToc from 'material-ui/svg-icons/action/toc';
import _ActionToday from 'material-ui/svg-icons/action/today';
import _ActionToll from 'material-ui/svg-icons/action/toll';
import _ActionTouchApp from 'material-ui/svg-icons/action/touch-app';
import _ActionTrackChanges from 'material-ui/svg-icons/action/track-changes';
import _ActionTranslate from 'material-ui/svg-icons/action/translate';
import _ActionTrendingDown from 'material-ui/svg-icons/action/trending-down';
import _ActionTrendingFlat from 'material-ui/svg-icons/action/trending-flat';
import _ActionTrendingUp from 'material-ui/svg-icons/action/trending-up';
import _ActionTurnedIn from 'material-ui/svg-icons/action/turned-in';
import _ActionTurnedInNot from 'material-ui/svg-icons/action/turned-in-not';
import _ActionUpdate from 'material-ui/svg-icons/action/update';
import _ActionVerifiedUser from 'material-ui/svg-icons/action/verified-user';
import _ActionViewAgenda from 'material-ui/svg-icons/action/view-agenda';
import _ActionViewArray from 'material-ui/svg-icons/action/view-array';
import _ActionViewCarousel from 'material-ui/svg-icons/action/view-carousel';
import _ActionViewColumn from 'material-ui/svg-icons/action/view-column';
import _ActionViewDay from 'material-ui/svg-icons/action/view-day';
import _ActionViewHeadline from 'material-ui/svg-icons/action/view-headline';
import _ActionViewList from 'material-ui/svg-icons/action/view-list';
import _ActionViewModule from 'material-ui/svg-icons/action/view-module';
import _ActionViewQuilt from 'material-ui/svg-icons/action/view-quilt';
import _ActionViewStream from 'material-ui/svg-icons/action/view-stream';
import _ActionViewWeek from 'material-ui/svg-icons/action/view-week';
import _ActionVisibility from 'material-ui/svg-icons/action/visibility';
import _ActionVisibilityOff from 'material-ui/svg-icons/action/visibility-off';
import _ActionWatchLater from 'material-ui/svg-icons/action/watch-later';
import _ActionWork from 'material-ui/svg-icons/action/work';
import _ActionYoutubeSearchedFor from 'material-ui/svg-icons/action/youtube-searched-for';
import _ActionZoomIn from 'material-ui/svg-icons/action/zoom-in';
import _ActionZoomOut from 'material-ui/svg-icons/action/zoom-out';
import _AlertAddAlert from 'material-ui/svg-icons/alert/add-alert';
import _AlertError from 'material-ui/svg-icons/alert/error';
import _AlertErrorOutline from 'material-ui/svg-icons/alert/error-outline';
import _AlertWarning from 'material-ui/svg-icons/alert/warning';
import _AvAddToQueue from 'material-ui/svg-icons/av/add-to-queue';
import _AvAirplay from 'material-ui/svg-icons/av/airplay';
import _AvAlbum from 'material-ui/svg-icons/av/album';
import _AvArtTrack from 'material-ui/svg-icons/av/art-track';
import _AvAvTimer from 'material-ui/svg-icons/av/av-timer';
import _AvBrandingWatermark from 'material-ui/svg-icons/av/branding-watermark';
import _AvCallToAction from 'material-ui/svg-icons/av/call-to-action';
import _AvClosedCaption from 'material-ui/svg-icons/av/closed-caption';
import _AvEqualizer from 'material-ui/svg-icons/av/equalizer';
import _AvExplicit from 'material-ui/svg-icons/av/explicit';
import _AvFastForward from 'material-ui/svg-icons/av/fast-forward';
import _AvFastRewind from 'material-ui/svg-icons/av/fast-rewind';
import _AvFeaturedPlayList from 'material-ui/svg-icons/av/featured-play-list';
import _AvFeaturedVideo from 'material-ui/svg-icons/av/featured-video';
import _AvFiberDvr from 'material-ui/svg-icons/av/fiber-dvr';
import _AvFiberManualRecord from 'material-ui/svg-icons/av/fiber-manual-record';
import _AvFiberNew from 'material-ui/svg-icons/av/fiber-new';
import _AvFiberPin from 'material-ui/svg-icons/av/fiber-pin';
import _AvFiberSmartRecord from 'material-ui/svg-icons/av/fiber-smart-record';
import _AvForward10 from 'material-ui/svg-icons/av/forward-10';
import _AvForward30 from 'material-ui/svg-icons/av/forward-30';
import _AvForward5 from 'material-ui/svg-icons/av/forward-5';
import _AvGames from 'material-ui/svg-icons/av/games';
import _AvHd from 'material-ui/svg-icons/av/hd';
import _AvHearing from 'material-ui/svg-icons/av/hearing';
import _AvHighQuality from 'material-ui/svg-icons/av/high-quality';
import _AvLibraryAdd from 'material-ui/svg-icons/av/library-add';
import _AvLibraryBooks from 'material-ui/svg-icons/av/library-books';
import _AvLibraryMusic from 'material-ui/svg-icons/av/library-music';
import _AvLoop from 'material-ui/svg-icons/av/loop';
import _AvMic from 'material-ui/svg-icons/av/mic';
import _AvMicNone from 'material-ui/svg-icons/av/mic-none';
import _AvMicOff from 'material-ui/svg-icons/av/mic-off';
import _AvMovie from 'material-ui/svg-icons/av/movie';
import _AvMusicVideo from 'material-ui/svg-icons/av/music-video';
import _AvNewReleases from 'material-ui/svg-icons/av/new-releases';
import _AvNotInterested from 'material-ui/svg-icons/av/not-interested';
import _AvNote from 'material-ui/svg-icons/av/note';
import _AvPause from 'material-ui/svg-icons/av/pause';
import _AvPauseCircleFilled from 'material-ui/svg-icons/av/pause-circle-filled';
import _AvPauseCircleOutline from 'material-ui/svg-icons/av/pause-circle-outline';
import _AvPlayArrow from 'material-ui/svg-icons/av/play-arrow';
import _AvPlayCircleFilled from 'material-ui/svg-icons/av/play-circle-filled';
import _AvPlayCircleOutline from 'material-ui/svg-icons/av/play-circle-outline';
import _AvPlaylistAdd from 'material-ui/svg-icons/av/playlist-add';
import _AvPlaylistAddCheck from 'material-ui/svg-icons/av/playlist-add-check';
import _AvPlaylistPlay from 'material-ui/svg-icons/av/playlist-play';
import _AvQueue from 'material-ui/svg-icons/av/queue';
import _AvQueueMusic from 'material-ui/svg-icons/av/queue-music';
import _AvQueuePlayNext from 'material-ui/svg-icons/av/queue-play-next';
import _AvRadio from 'material-ui/svg-icons/av/radio';
import _AvRecentActors from 'material-ui/svg-icons/av/recent-actors';
import _AvRemoveFromQueue from 'material-ui/svg-icons/av/remove-from-queue';
import _AvRepeat from 'material-ui/svg-icons/av/repeat';
import _AvRepeatOne from 'material-ui/svg-icons/av/repeat-one';
import _AvReplay from 'material-ui/svg-icons/av/replay';
import _AvReplay10 from 'material-ui/svg-icons/av/replay-10';
import _AvReplay30 from 'material-ui/svg-icons/av/replay-30';
import _AvReplay5 from 'material-ui/svg-icons/av/replay-5';
import _AvShuffle from 'material-ui/svg-icons/av/shuffle';
import _AvSkipNext from 'material-ui/svg-icons/av/skip-next';
import _AvSkipPrevious from 'material-ui/svg-icons/av/skip-previous';
import _AvSlowMotionVideo from 'material-ui/svg-icons/av/slow-motion-video';
import _AvSnooze from 'material-ui/svg-icons/av/snooze';
import _AvSortByAlpha from 'material-ui/svg-icons/av/sort-by-alpha';
import _AvStop from 'material-ui/svg-icons/av/stop';
import _AvSubscriptions from 'material-ui/svg-icons/av/subscriptions';
import _AvSubtitles from 'material-ui/svg-icons/av/subtitles';
import _AvSurroundSound from 'material-ui/svg-icons/av/surround-sound';
import _AvVideoCall from 'material-ui/svg-icons/av/video-call';
import _AvVideoLabel from 'material-ui/svg-icons/av/video-label';
import _AvVideoLibrary from 'material-ui/svg-icons/av/video-library';
import _AvVideocam from 'material-ui/svg-icons/av/videocam';
import _AvVideocamOff from 'material-ui/svg-icons/av/videocam-off';
import _AvVolumeDown from 'material-ui/svg-icons/av/volume-down';
import _AvVolumeMute from 'material-ui/svg-icons/av/volume-mute';
import _AvVolumeOff from 'material-ui/svg-icons/av/volume-off';
import _AvVolumeUp from 'material-ui/svg-icons/av/volume-up';
import _AvWeb from 'material-ui/svg-icons/av/web';
import _AvWebAsset from 'material-ui/svg-icons/av/web-asset';
import _CommunicationBusiness from 'material-ui/svg-icons/communication/business';
import _CommunicationCall from 'material-ui/svg-icons/communication/call';
import _CommunicationCallEnd from 'material-ui/svg-icons/communication/call-end';
import _CommunicationCallMade from 'material-ui/svg-icons/communication/call-made';
import _CommunicationCallMerge from 'material-ui/svg-icons/communication/call-merge';
import _CommunicationCallMissed from 'material-ui/svg-icons/communication/call-missed';
import _CommunicationCallMissedOutgoing from 'material-ui/svg-icons/communication/call-missed-outgoing';
import _CommunicationCallReceived from 'material-ui/svg-icons/communication/call-received';
import _CommunicationCallSplit from 'material-ui/svg-icons/communication/call-split';
import _CommunicationChat from 'material-ui/svg-icons/communication/chat';
import _CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';
import _CommunicationChatBubbleOutline from 'material-ui/svg-icons/communication/chat-bubble-outline';
import _CommunicationClearAll from 'material-ui/svg-icons/communication/clear-all';
import _CommunicationComment from 'material-ui/svg-icons/communication/comment';
import _CommunicationContactMail from 'material-ui/svg-icons/communication/contact-mail';
import _CommunicationContactPhone from 'material-ui/svg-icons/communication/contact-phone';
import _CommunicationContacts from 'material-ui/svg-icons/communication/contacts';
import _CommunicationDialerSip from 'material-ui/svg-icons/communication/dialer-sip';
import _CommunicationDialpad from 'material-ui/svg-icons/communication/dialpad';
import _CommunicationEmail from 'material-ui/svg-icons/communication/email';
import _CommunicationForum from 'material-ui/svg-icons/communication/forum';
import _CommunicationImportContacts from 'material-ui/svg-icons/communication/import-contacts';
import _CommunicationImportExport from 'material-ui/svg-icons/communication/import-export';
import _CommunicationInvertColorsOff from 'material-ui/svg-icons/communication/invert-colors-off';
import _CommunicationLiveHelp from 'material-ui/svg-icons/communication/live-help';
import _CommunicationLocationOff from 'material-ui/svg-icons/communication/location-off';
import _CommunicationLocationOn from 'material-ui/svg-icons/communication/location-on';
import _CommunicationMailOutline from 'material-ui/svg-icons/communication/mail-outline';
import _CommunicationMessage from 'material-ui/svg-icons/communication/message';
import _CommunicationNoSim from 'material-ui/svg-icons/communication/no-sim';
import _CommunicationPhone from 'material-ui/svg-icons/communication/phone';
import _CommunicationPhonelinkErase from 'material-ui/svg-icons/communication/phonelink-erase';
import _CommunicationPhonelinkLock from 'material-ui/svg-icons/communication/phonelink-lock';
import _CommunicationPhonelinkRing from 'material-ui/svg-icons/communication/phonelink-ring';
import _CommunicationPhonelinkSetup from 'material-ui/svg-icons/communication/phonelink-setup';
import _CommunicationPortableWifiOff from 'material-ui/svg-icons/communication/portable-wifi-off';
import _CommunicationPresentToAll from 'material-ui/svg-icons/communication/present-to-all';
import _CommunicationRingVolume from 'material-ui/svg-icons/communication/ring-volume';
import _CommunicationRssFeed from 'material-ui/svg-icons/communication/rss-feed';
import _CommunicationScreenShare from 'material-ui/svg-icons/communication/screen-share';
import _CommunicationSpeakerPhone from 'material-ui/svg-icons/communication/speaker-phone';
import _CommunicationStayCurrentLandscape from 'material-ui/svg-icons/communication/stay-current-landscape';
import _CommunicationStayCurrentPortrait from 'material-ui/svg-icons/communication/stay-current-portrait';
import _CommunicationStayPrimaryLandscape from 'material-ui/svg-icons/communication/stay-primary-landscape';
import _CommunicationStayPrimaryPortrait from 'material-ui/svg-icons/communication/stay-primary-portrait';
import _CommunicationStopScreenShare from 'material-ui/svg-icons/communication/stop-screen-share';
import _CommunicationSwapCalls from 'material-ui/svg-icons/communication/swap-calls';
import _CommunicationTextsms from 'material-ui/svg-icons/communication/textsms';
import _CommunicationVoicemail from 'material-ui/svg-icons/communication/voicemail';
import _CommunicationVpnKey from 'material-ui/svg-icons/communication/vpn-key';
import _ContentAdd from 'material-ui/svg-icons/content/add';
import _ContentAddBox from 'material-ui/svg-icons/content/add-box';
import _ContentAddCircle from 'material-ui/svg-icons/content/add-circle';
import _ContentAddCircleOutline from 'material-ui/svg-icons/content/add-circle-outline';
import _ContentArchive from 'material-ui/svg-icons/content/archive';
import _ContentBackspace from 'material-ui/svg-icons/content/backspace';
import _ContentBlock from 'material-ui/svg-icons/content/block';
import _ContentClear from 'material-ui/svg-icons/content/clear';
import _ContentContentCopy from 'material-ui/svg-icons/content/content-copy';
import _ContentContentCut from 'material-ui/svg-icons/content/content-cut';
import _ContentContentPaste from 'material-ui/svg-icons/content/content-paste';
import _ContentCreate from 'material-ui/svg-icons/content/create';
import _ContentDeleteSweep from 'material-ui/svg-icons/content/delete-sweep';
import _ContentDrafts from 'material-ui/svg-icons/content/drafts';
import _ContentFilterList from 'material-ui/svg-icons/content/filter-list';
import _ContentFlag from 'material-ui/svg-icons/content/flag';
import _ContentFontDownload from 'material-ui/svg-icons/content/font-download';
import _ContentForward from 'material-ui/svg-icons/content/forward';
import _ContentGesture from 'material-ui/svg-icons/content/gesture';
import _ContentInbox from 'material-ui/svg-icons/content/inbox';
import _ContentLink from 'material-ui/svg-icons/content/link';
import _ContentLowPriority from 'material-ui/svg-icons/content/low-priority';
import _ContentMail from 'material-ui/svg-icons/content/mail';
import _ContentMarkunread from 'material-ui/svg-icons/content/markunread';
import _ContentMoveToInbox from 'material-ui/svg-icons/content/move-to-inbox';
import _ContentNextWeek from 'material-ui/svg-icons/content/next-week';
import _ContentRedo from 'material-ui/svg-icons/content/redo';
import _ContentRemove from 'material-ui/svg-icons/content/remove';
import _ContentRemoveCircle from 'material-ui/svg-icons/content/remove-circle';
import _ContentRemoveCircleOutline from 'material-ui/svg-icons/content/remove-circle-outline';
import _ContentReply from 'material-ui/svg-icons/content/reply';
import _ContentReplyAll from 'material-ui/svg-icons/content/reply-all';
import _ContentReport from 'material-ui/svg-icons/content/report';
import _ContentSave from 'material-ui/svg-icons/content/save';
import _ContentSelectAll from 'material-ui/svg-icons/content/select-all';
import _ContentSend from 'material-ui/svg-icons/content/send';
import _ContentSort from 'material-ui/svg-icons/content/sort';
import _ContentTextFormat from 'material-ui/svg-icons/content/text-format';
import _ContentUnarchive from 'material-ui/svg-icons/content/unarchive';
import _ContentUndo from 'material-ui/svg-icons/content/undo';
import _ContentWeekend from 'material-ui/svg-icons/content/weekend';
import _DeviceAccessAlarm from 'material-ui/svg-icons/device/access-alarm';
import _DeviceAccessAlarms from 'material-ui/svg-icons/device/access-alarms';
import _DeviceAccessTime from 'material-ui/svg-icons/device/access-time';
import _DeviceAddAlarm from 'material-ui/svg-icons/device/add-alarm';
import _DeviceAirplanemodeActive from 'material-ui/svg-icons/device/airplanemode-active';
import _DeviceAirplanemodeInactive from 'material-ui/svg-icons/device/airplanemode-inactive';
import _DeviceBattery20 from 'material-ui/svg-icons/device/battery-20';
import _DeviceBattery30 from 'material-ui/svg-icons/device/battery-30';
import _DeviceBattery50 from 'material-ui/svg-icons/device/battery-50';
import _DeviceBattery60 from 'material-ui/svg-icons/device/battery-60';
import _DeviceBattery80 from 'material-ui/svg-icons/device/battery-80';
import _DeviceBattery90 from 'material-ui/svg-icons/device/battery-90';
import _DeviceBatteryAlert from 'material-ui/svg-icons/device/battery-alert';
import _DeviceBatteryCharging20 from 'material-ui/svg-icons/device/battery-charging-20';
import _DeviceBatteryCharging30 from 'material-ui/svg-icons/device/battery-charging-30';
import _DeviceBatteryCharging50 from 'material-ui/svg-icons/device/battery-charging-50';
import _DeviceBatteryCharging60 from 'material-ui/svg-icons/device/battery-charging-60';
import _DeviceBatteryCharging80 from 'material-ui/svg-icons/device/battery-charging-80';
import _DeviceBatteryCharging90 from 'material-ui/svg-icons/device/battery-charging-90';
import _DeviceBatteryChargingFull from 'material-ui/svg-icons/device/battery-charging-full';
import _DeviceBatteryFull from 'material-ui/svg-icons/device/battery-full';
import _DeviceBatteryStd from 'material-ui/svg-icons/device/battery-std';
import _DeviceBatteryUnknown from 'material-ui/svg-icons/device/battery-unknown';
import _DeviceBluetooth from 'material-ui/svg-icons/device/bluetooth';
import _DeviceBluetoothConnected from 'material-ui/svg-icons/device/bluetooth-connected';
import _DeviceBluetoothDisabled from 'material-ui/svg-icons/device/bluetooth-disabled';
import _DeviceBluetoothSearching from 'material-ui/svg-icons/device/bluetooth-searching';
import _DeviceBrightnessAuto from 'material-ui/svg-icons/device/brightness-auto';
import _DeviceBrightnessHigh from 'material-ui/svg-icons/device/brightness-high';
import _DeviceBrightnessLow from 'material-ui/svg-icons/device/brightness-low';
import _DeviceBrightnessMedium from 'material-ui/svg-icons/device/brightness-medium';
import _DeviceDataUsage from 'material-ui/svg-icons/device/data-usage';
import _DeviceDeveloperMode from 'material-ui/svg-icons/device/developer-mode';
import _DeviceDevices from 'material-ui/svg-icons/device/devices';
import _DeviceDvr from 'material-ui/svg-icons/device/dvr';
import _DeviceGpsFixed from 'material-ui/svg-icons/device/gps-fixed';
import _DeviceGpsNotFixed from 'material-ui/svg-icons/device/gps-not-fixed';
import _DeviceGpsOff from 'material-ui/svg-icons/device/gps-off';
import _DeviceGraphicEq from 'material-ui/svg-icons/device/graphic-eq';
import _DeviceLocationDisabled from 'material-ui/svg-icons/device/location-disabled';
import _DeviceLocationSearching from 'material-ui/svg-icons/device/location-searching';
import _DeviceNetworkCell from 'material-ui/svg-icons/device/network-cell';
import _DeviceNetworkWifi from 'material-ui/svg-icons/device/network-wifi';
import _DeviceNfc from 'material-ui/svg-icons/device/nfc';
import _DeviceScreenLockLandscape from 'material-ui/svg-icons/device/screen-lock-landscape';
import _DeviceScreenLockPortrait from 'material-ui/svg-icons/device/screen-lock-portrait';
import _DeviceScreenLockRotation from 'material-ui/svg-icons/device/screen-lock-rotation';
import _DeviceScreenRotation from 'material-ui/svg-icons/device/screen-rotation';
import _DeviceSdStorage from 'material-ui/svg-icons/device/sd-storage';
import _DeviceSettingsSystemDaydream from 'material-ui/svg-icons/device/settings-system-daydream';
import _DeviceSignalCellular0Bar from 'material-ui/svg-icons/device/signal-cellular-0-bar';
import _DeviceSignalCellular1Bar from 'material-ui/svg-icons/device/signal-cellular-1-bar';
import _DeviceSignalCellular2Bar from 'material-ui/svg-icons/device/signal-cellular-2-bar';
import _DeviceSignalCellular3Bar from 'material-ui/svg-icons/device/signal-cellular-3-bar';
import _DeviceSignalCellular4Bar from 'material-ui/svg-icons/device/signal-cellular-4-bar';
import _DeviceSignalCellularConnectedNoInternet0Bar from 'material-ui/svg-icons/device/signal-cellular-connected-no-internet-0-bar';
import _DeviceSignalCellularConnectedNoInternet1Bar from 'material-ui/svg-icons/device/signal-cellular-connected-no-internet-1-bar';
import _DeviceSignalCellularConnectedNoInternet2Bar from 'material-ui/svg-icons/device/signal-cellular-connected-no-internet-2-bar';
import _DeviceSignalCellularConnectedNoInternet3Bar from 'material-ui/svg-icons/device/signal-cellular-connected-no-internet-3-bar';
import _DeviceSignalCellularConnectedNoInternet4Bar from 'material-ui/svg-icons/device/signal-cellular-connected-no-internet-4-bar';
import _DeviceSignalCellularNoSim from 'material-ui/svg-icons/device/signal-cellular-no-sim';
import _DeviceSignalCellularNull from 'material-ui/svg-icons/device/signal-cellular-null';
import _DeviceSignalCellularOff from 'material-ui/svg-icons/device/signal-cellular-off';
import _DeviceSignalWifi0Bar from 'material-ui/svg-icons/device/signal-wifi-0-bar';
import _DeviceSignalWifi1Bar from 'material-ui/svg-icons/device/signal-wifi-1-bar';
import _DeviceSignalWifi1BarLock from 'material-ui/svg-icons/device/signal-wifi-1-bar-lock';
import _DeviceSignalWifi2Bar from 'material-ui/svg-icons/device/signal-wifi-2-bar';
import _DeviceSignalWifi2BarLock from 'material-ui/svg-icons/device/signal-wifi-2-bar-lock';
import _DeviceSignalWifi3Bar from 'material-ui/svg-icons/device/signal-wifi-3-bar';
import _DeviceSignalWifi3BarLock from 'material-ui/svg-icons/device/signal-wifi-3-bar-lock';
import _DeviceSignalWifi4Bar from 'material-ui/svg-icons/device/signal-wifi-4-bar';
import _DeviceSignalWifi4BarLock from 'material-ui/svg-icons/device/signal-wifi-4-bar-lock';
import _DeviceSignalWifiOff from 'material-ui/svg-icons/device/signal-wifi-off';
import _DeviceStorage from 'material-ui/svg-icons/device/storage';
import _DeviceUsb from 'material-ui/svg-icons/device/usb';
import _DeviceWallpaper from 'material-ui/svg-icons/device/wallpaper';
import _DeviceWidgets from 'material-ui/svg-icons/device/widgets';
import _DeviceWifiLock from 'material-ui/svg-icons/device/wifi-lock';
import _DeviceWifiTethering from 'material-ui/svg-icons/device/wifi-tethering';
import _EditorAttachFile from 'material-ui/svg-icons/editor/attach-file';
import _EditorAttachMoney from 'material-ui/svg-icons/editor/attach-money';
import _EditorBorderAll from 'material-ui/svg-icons/editor/border-all';
import _EditorBorderBottom from 'material-ui/svg-icons/editor/border-bottom';
import _EditorBorderClear from 'material-ui/svg-icons/editor/border-clear';
import _EditorBorderColor from 'material-ui/svg-icons/editor/border-color';
import _EditorBorderHorizontal from 'material-ui/svg-icons/editor/border-horizontal';
import _EditorBorderInner from 'material-ui/svg-icons/editor/border-inner';
import _EditorBorderLeft from 'material-ui/svg-icons/editor/border-left';
import _EditorBorderOuter from 'material-ui/svg-icons/editor/border-outer';
import _EditorBorderRight from 'material-ui/svg-icons/editor/border-right';
import _EditorBorderStyle from 'material-ui/svg-icons/editor/border-style';
import _EditorBorderTop from 'material-ui/svg-icons/editor/border-top';
import _EditorBorderVertical from 'material-ui/svg-icons/editor/border-vertical';
import _EditorBubbleChart from 'material-ui/svg-icons/editor/bubble-chart';
import _EditorDragHandle from 'material-ui/svg-icons/editor/drag-handle';
import _EditorFormatAlignCenter from 'material-ui/svg-icons/editor/format-align-center';
import _EditorFormatAlignJustify from 'material-ui/svg-icons/editor/format-align-justify';
import _EditorFormatAlignLeft from 'material-ui/svg-icons/editor/format-align-left';
import _EditorFormatAlignRight from 'material-ui/svg-icons/editor/format-align-right';
import _EditorFormatBold from 'material-ui/svg-icons/editor/format-bold';
import _EditorFormatClear from 'material-ui/svg-icons/editor/format-clear';
import _EditorFormatColorFill from 'material-ui/svg-icons/editor/format-color-fill';
import _EditorFormatColorReset from 'material-ui/svg-icons/editor/format-color-reset';
import _EditorFormatColorText from 'material-ui/svg-icons/editor/format-color-text';
import _EditorFormatIndentDecrease from 'material-ui/svg-icons/editor/format-indent-decrease';
import _EditorFormatIndentIncrease from 'material-ui/svg-icons/editor/format-indent-increase';
import _EditorFormatItalic from 'material-ui/svg-icons/editor/format-italic';
import _EditorFormatLineSpacing from 'material-ui/svg-icons/editor/format-line-spacing';
import _EditorFormatListBulleted from 'material-ui/svg-icons/editor/format-list-bulleted';
import _EditorFormatListNumbered from 'material-ui/svg-icons/editor/format-list-numbered';
import _EditorFormatPaint from 'material-ui/svg-icons/editor/format-paint';
import _EditorFormatQuote from 'material-ui/svg-icons/editor/format-quote';
import _EditorFormatShapes from 'material-ui/svg-icons/editor/format-shapes';
import _EditorFormatSize from 'material-ui/svg-icons/editor/format-size';
import _EditorFormatStrikethrough from 'material-ui/svg-icons/editor/format-strikethrough';
import _EditorFormatTextdirectionLToR from 'material-ui/svg-icons/editor/format-textdirection-l-to-r';
import _EditorFormatTextdirectionRToL from 'material-ui/svg-icons/editor/format-textdirection-r-to-l';
import _EditorFormatUnderlined from 'material-ui/svg-icons/editor/format-underlined';
import _EditorFunctions from 'material-ui/svg-icons/editor/functions';
import _EditorHighlight from 'material-ui/svg-icons/editor/highlight';
import _EditorInsertChart from 'material-ui/svg-icons/editor/insert-chart';
import _EditorInsertComment from 'material-ui/svg-icons/editor/insert-comment';
import _EditorInsertDriveFile from 'material-ui/svg-icons/editor/insert-drive-file';
import _EditorInsertEmoticon from 'material-ui/svg-icons/editor/insert-emoticon';
import _EditorInsertInvitation from 'material-ui/svg-icons/editor/insert-invitation';
import _EditorInsertLink from 'material-ui/svg-icons/editor/insert-link';
import _EditorInsertPhoto from 'material-ui/svg-icons/editor/insert-photo';
import _EditorLinearScale from 'material-ui/svg-icons/editor/linear-scale';
import _EditorMergeType from 'material-ui/svg-icons/editor/merge-type';
import _EditorModeComment from 'material-ui/svg-icons/editor/mode-comment';
import _EditorModeEdit from 'material-ui/svg-icons/editor/mode-edit';
import _EditorMonetizationOn from 'material-ui/svg-icons/editor/monetization-on';
import _EditorMoneyOff from 'material-ui/svg-icons/editor/money-off';
import _EditorMultilineChart from 'material-ui/svg-icons/editor/multiline-chart';
import _EditorPieChart from 'material-ui/svg-icons/editor/pie-chart';
import _EditorPieChartOutlined from 'material-ui/svg-icons/editor/pie-chart-outlined';
import _EditorPublish from 'material-ui/svg-icons/editor/publish';
import _EditorShortText from 'material-ui/svg-icons/editor/short-text';
import _EditorShowChart from 'material-ui/svg-icons/editor/show-chart';
import _EditorSpaceBar from 'material-ui/svg-icons/editor/space-bar';
import _EditorStrikethroughS from 'material-ui/svg-icons/editor/strikethrough-s';
import _EditorTextFields from 'material-ui/svg-icons/editor/text-fields';
import _EditorTitle from 'material-ui/svg-icons/editor/title';
import _EditorVerticalAlignBottom from 'material-ui/svg-icons/editor/vertical-align-bottom';
import _EditorVerticalAlignCenter from 'material-ui/svg-icons/editor/vertical-align-center';
import _EditorVerticalAlignTop from 'material-ui/svg-icons/editor/vertical-align-top';
import _EditorWrapText from 'material-ui/svg-icons/editor/wrap-text';
import _FileAttachment from 'material-ui/svg-icons/file/attachment';
import _FileCloud from 'material-ui/svg-icons/file/cloud';
import _FileCloudCircle from 'material-ui/svg-icons/file/cloud-circle';
import _FileCloudDone from 'material-ui/svg-icons/file/cloud-done';
import _FileCloudDownload from 'material-ui/svg-icons/file/cloud-download';
import _FileCloudOff from 'material-ui/svg-icons/file/cloud-off';
import _FileCloudQueue from 'material-ui/svg-icons/file/cloud-queue';
import _FileCloudUpload from 'material-ui/svg-icons/file/cloud-upload';
import _FileCreateNewFolder from 'material-ui/svg-icons/file/create-new-folder';
import _FileFileDownload from 'material-ui/svg-icons/file/file-download';
import _FileFileUpload from 'material-ui/svg-icons/file/file-upload';
import _FileFolder from 'material-ui/svg-icons/file/folder';
import _FileFolderOpen from 'material-ui/svg-icons/file/folder-open';
import _FileFolderShared from 'material-ui/svg-icons/file/folder-shared';
import _HardwareCast from 'material-ui/svg-icons/hardware/cast';
import _HardwareCastConnected from 'material-ui/svg-icons/hardware/cast-connected';
import _HardwareComputer from 'material-ui/svg-icons/hardware/computer';
import _HardwareDesktopMac from 'material-ui/svg-icons/hardware/desktop-mac';
import _HardwareDesktopWindows from 'material-ui/svg-icons/hardware/desktop-windows';
import _HardwareDeveloperBoard from 'material-ui/svg-icons/hardware/developer-board';
import _HardwareDeviceHub from 'material-ui/svg-icons/hardware/device-hub';
import _HardwareDevicesOther from 'material-ui/svg-icons/hardware/devices-other';
import _HardwareDock from 'material-ui/svg-icons/hardware/dock';
import _HardwareGamepad from 'material-ui/svg-icons/hardware/gamepad';
import _HardwareHeadset from 'material-ui/svg-icons/hardware/headset';
import _HardwareHeadsetMic from 'material-ui/svg-icons/hardware/headset-mic';
import _HardwareKeyboard from 'material-ui/svg-icons/hardware/keyboard';
import _HardwareKeyboardArrowDown from 'material-ui/svg-icons/hardware/keyboard-arrow-down';
import _HardwareKeyboardArrowLeft from 'material-ui/svg-icons/hardware/keyboard-arrow-left';
import _HardwareKeyboardArrowRight from 'material-ui/svg-icons/hardware/keyboard-arrow-right';
import _HardwareKeyboardArrowUp from 'material-ui/svg-icons/hardware/keyboard-arrow-up';
import _HardwareKeyboardBackspace from 'material-ui/svg-icons/hardware/keyboard-backspace';
import _HardwareKeyboardCapslock from 'material-ui/svg-icons/hardware/keyboard-capslock';
import _HardwareKeyboardHide from 'material-ui/svg-icons/hardware/keyboard-hide';
import _HardwareKeyboardReturn from 'material-ui/svg-icons/hardware/keyboard-return';
import _HardwareKeyboardTab from 'material-ui/svg-icons/hardware/keyboard-tab';
import _HardwareKeyboardVoice from 'material-ui/svg-icons/hardware/keyboard-voice';
import _HardwareLaptop from 'material-ui/svg-icons/hardware/laptop';
import _HardwareLaptopChromebook from 'material-ui/svg-icons/hardware/laptop-chromebook';
import _HardwareLaptopMac from 'material-ui/svg-icons/hardware/laptop-mac';
import _HardwareLaptopWindows from 'material-ui/svg-icons/hardware/laptop-windows';
import _HardwareMemory from 'material-ui/svg-icons/hardware/memory';
import _HardwareMouse from 'material-ui/svg-icons/hardware/mouse';
import _HardwarePhoneAndroid from 'material-ui/svg-icons/hardware/phone-android';
import _HardwarePhoneIphone from 'material-ui/svg-icons/hardware/phone-iphone';
import _HardwarePhonelink from 'material-ui/svg-icons/hardware/phonelink';
import _HardwarePhonelinkOff from 'material-ui/svg-icons/hardware/phonelink-off';
import _HardwarePowerInput from 'material-ui/svg-icons/hardware/power-input';
import _HardwareRouter from 'material-ui/svg-icons/hardware/router';
import _HardwareScanner from 'material-ui/svg-icons/hardware/scanner';
import _HardwareSecurity from 'material-ui/svg-icons/hardware/security';
import _HardwareSimCard from 'material-ui/svg-icons/hardware/sim-card';
import _HardwareSmartphone from 'material-ui/svg-icons/hardware/smartphone';
import _HardwareSpeaker from 'material-ui/svg-icons/hardware/speaker';
import _HardwareSpeakerGroup from 'material-ui/svg-icons/hardware/speaker-group';
import _HardwareTablet from 'material-ui/svg-icons/hardware/tablet';
import _HardwareTabletAndroid from 'material-ui/svg-icons/hardware/tablet-android';
import _HardwareTabletMac from 'material-ui/svg-icons/hardware/tablet-mac';
import _HardwareToys from 'material-ui/svg-icons/hardware/toys';
import _HardwareTv from 'material-ui/svg-icons/hardware/tv';
import _HardwareVideogameAsset from 'material-ui/svg-icons/hardware/videogame-asset';
import _HardwareWatch from 'material-ui/svg-icons/hardware/watch';
import _ImageAddAPhoto from 'material-ui/svg-icons/image/add-a-photo';
import _ImageAddToPhotos from 'material-ui/svg-icons/image/add-to-photos';
import _ImageAdjust from 'material-ui/svg-icons/image/adjust';
import _ImageAssistant from 'material-ui/svg-icons/image/assistant';
import _ImageAssistantPhoto from 'material-ui/svg-icons/image/assistant-photo';
import _ImageAudiotrack from 'material-ui/svg-icons/image/audiotrack';
import _ImageBlurCircular from 'material-ui/svg-icons/image/blur-circular';
import _ImageBlurLinear from 'material-ui/svg-icons/image/blur-linear';
import _ImageBlurOff from 'material-ui/svg-icons/image/blur-off';
import _ImageBlurOn from 'material-ui/svg-icons/image/blur-on';
import _ImageBrightness1 from 'material-ui/svg-icons/image/brightness-1';
import _ImageBrightness2 from 'material-ui/svg-icons/image/brightness-2';
import _ImageBrightness3 from 'material-ui/svg-icons/image/brightness-3';
import _ImageBrightness4 from 'material-ui/svg-icons/image/brightness-4';
import _ImageBrightness5 from 'material-ui/svg-icons/image/brightness-5';
import _ImageBrightness6 from 'material-ui/svg-icons/image/brightness-6';
import _ImageBrightness7 from 'material-ui/svg-icons/image/brightness-7';
import _ImageBrokenImage from 'material-ui/svg-icons/image/broken-image';
import _ImageBrush from 'material-ui/svg-icons/image/brush';
import _ImageBurstMode from 'material-ui/svg-icons/image/burst-mode';
import _ImageCamera from 'material-ui/svg-icons/image/camera';
import _ImageCameraAlt from 'material-ui/svg-icons/image/camera-alt';
import _ImageCameraFront from 'material-ui/svg-icons/image/camera-front';
import _ImageCameraRear from 'material-ui/svg-icons/image/camera-rear';
import _ImageCameraRoll from 'material-ui/svg-icons/image/camera-roll';
import _ImageCenterFocusStrong from 'material-ui/svg-icons/image/center-focus-strong';
import _ImageCenterFocusWeak from 'material-ui/svg-icons/image/center-focus-weak';
import _ImageCollections from 'material-ui/svg-icons/image/collections';
import _ImageCollectionsBookmark from 'material-ui/svg-icons/image/collections-bookmark';
import _ImageColorLens from 'material-ui/svg-icons/image/color-lens';
import _ImageColorize from 'material-ui/svg-icons/image/colorize';
import _ImageCompare from 'material-ui/svg-icons/image/compare';
import _ImageControlPoint from 'material-ui/svg-icons/image/control-point';
import _ImageControlPointDuplicate from 'material-ui/svg-icons/image/control-point-duplicate';
import _ImageCrop from 'material-ui/svg-icons/image/crop';
import _ImageCrop169 from 'material-ui/svg-icons/image/crop-16-9';
import _ImageCrop32 from 'material-ui/svg-icons/image/crop-3-2';
import _ImageCrop54 from 'material-ui/svg-icons/image/crop-5-4';
import _ImageCrop75 from 'material-ui/svg-icons/image/crop-7-5';
import _ImageCropDin from 'material-ui/svg-icons/image/crop-din';
import _ImageCropFree from 'material-ui/svg-icons/image/crop-free';
import _ImageCropLandscape from 'material-ui/svg-icons/image/crop-landscape';
import _ImageCropOriginal from 'material-ui/svg-icons/image/crop-original';
import _ImageCropPortrait from 'material-ui/svg-icons/image/crop-portrait';
import _ImageCropRotate from 'material-ui/svg-icons/image/crop-rotate';
import _ImageCropSquare from 'material-ui/svg-icons/image/crop-square';
import _ImageDehaze from 'material-ui/svg-icons/image/dehaze';
import _ImageDetails from 'material-ui/svg-icons/image/details';
import _ImageEdit from 'material-ui/svg-icons/image/edit';
import _ImageExposure from 'material-ui/svg-icons/image/exposure';
import _ImageExposureNeg1 from 'material-ui/svg-icons/image/exposure-neg-1';
import _ImageExposureNeg2 from 'material-ui/svg-icons/image/exposure-neg-2';
import _ImageExposurePlus1 from 'material-ui/svg-icons/image/exposure-plus-1';
import _ImageExposurePlus2 from 'material-ui/svg-icons/image/exposure-plus-2';
import _ImageExposureZero from 'material-ui/svg-icons/image/exposure-zero';
import _ImageFilter from 'material-ui/svg-icons/image/filter';
import _ImageFilter1 from 'material-ui/svg-icons/image/filter-1';
import _ImageFilter2 from 'material-ui/svg-icons/image/filter-2';
import _ImageFilter3 from 'material-ui/svg-icons/image/filter-3';
import _ImageFilter4 from 'material-ui/svg-icons/image/filter-4';
import _ImageFilter5 from 'material-ui/svg-icons/image/filter-5';
import _ImageFilter6 from 'material-ui/svg-icons/image/filter-6';
import _ImageFilter7 from 'material-ui/svg-icons/image/filter-7';
import _ImageFilter8 from 'material-ui/svg-icons/image/filter-8';
import _ImageFilter9 from 'material-ui/svg-icons/image/filter-9';
import _ImageFilter9Plus from 'material-ui/svg-icons/image/filter-9-plus';
import _ImageFilterBAndW from 'material-ui/svg-icons/image/filter-b-and-w';
import _ImageFilterCenterFocus from 'material-ui/svg-icons/image/filter-center-focus';
import _ImageFilterDrama from 'material-ui/svg-icons/image/filter-drama';
import _ImageFilterFrames from 'material-ui/svg-icons/image/filter-frames';
import _ImageFilterHdr from 'material-ui/svg-icons/image/filter-hdr';
import _ImageFilterNone from 'material-ui/svg-icons/image/filter-none';
import _ImageFilterTiltShift from 'material-ui/svg-icons/image/filter-tilt-shift';
import _ImageFilterVintage from 'material-ui/svg-icons/image/filter-vintage';
import _ImageFlare from 'material-ui/svg-icons/image/flare';
import _ImageFlashAuto from 'material-ui/svg-icons/image/flash-auto';
import _ImageFlashOff from 'material-ui/svg-icons/image/flash-off';
import _ImageFlashOn from 'material-ui/svg-icons/image/flash-on';
import _ImageFlip from 'material-ui/svg-icons/image/flip';
import _ImageGradient from 'material-ui/svg-icons/image/gradient';
import _ImageGrain from 'material-ui/svg-icons/image/grain';
import _ImageGridOff from 'material-ui/svg-icons/image/grid-off';
import _ImageGridOn from 'material-ui/svg-icons/image/grid-on';
import _ImageHdrOff from 'material-ui/svg-icons/image/hdr-off';
import _ImageHdrOn from 'material-ui/svg-icons/image/hdr-on';
import _ImageHdrStrong from 'material-ui/svg-icons/image/hdr-strong';
import _ImageHdrWeak from 'material-ui/svg-icons/image/hdr-weak';
import _ImageHealing from 'material-ui/svg-icons/image/healing';
import _ImageImage from 'material-ui/svg-icons/image/image';
import _ImageImageAspectRatio from 'material-ui/svg-icons/image/image-aspect-ratio';
import _ImageIso from 'material-ui/svg-icons/image/iso';
import _ImageLandscape from 'material-ui/svg-icons/image/landscape';
import _ImageLeakAdd from 'material-ui/svg-icons/image/leak-add';
import _ImageLeakRemove from 'material-ui/svg-icons/image/leak-remove';
import _ImageLens from 'material-ui/svg-icons/image/lens';
import _ImageLinkedCamera from 'material-ui/svg-icons/image/linked-camera';
import _ImageLooks from 'material-ui/svg-icons/image/looks';
import _ImageLooks3 from 'material-ui/svg-icons/image/looks-3';
import _ImageLooks4 from 'material-ui/svg-icons/image/looks-4';
import _ImageLooks5 from 'material-ui/svg-icons/image/looks-5';
import _ImageLooks6 from 'material-ui/svg-icons/image/looks-6';
import _ImageLooksOne from 'material-ui/svg-icons/image/looks-one';
import _ImageLooksTwo from 'material-ui/svg-icons/image/looks-two';
import _ImageLoupe from 'material-ui/svg-icons/image/loupe';
import _ImageMonochromePhotos from 'material-ui/svg-icons/image/monochrome-photos';
import _ImageMovieCreation from 'material-ui/svg-icons/image/movie-creation';
import _ImageMovieFilter from 'material-ui/svg-icons/image/movie-filter';
import _ImageMusicNote from 'material-ui/svg-icons/image/music-note';
import _ImageNature from 'material-ui/svg-icons/image/nature';
import _ImageNaturePeople from 'material-ui/svg-icons/image/nature-people';
import _ImageNavigateBefore from 'material-ui/svg-icons/image/navigate-before';
import _ImageNavigateNext from 'material-ui/svg-icons/image/navigate-next';
import _ImagePalette from 'material-ui/svg-icons/image/palette';
import _ImagePanorama from 'material-ui/svg-icons/image/panorama';
import _ImagePanoramaFishEye from 'material-ui/svg-icons/image/panorama-fish-eye';
import _ImagePanoramaHorizontal from 'material-ui/svg-icons/image/panorama-horizontal';
import _ImagePanoramaVertical from 'material-ui/svg-icons/image/panorama-vertical';
import _ImagePanoramaWideAngle from 'material-ui/svg-icons/image/panorama-wide-angle';
import _ImagePhoto from 'material-ui/svg-icons/image/photo';
import _ImagePhotoAlbum from 'material-ui/svg-icons/image/photo-album';
import _ImagePhotoCamera from 'material-ui/svg-icons/image/photo-camera';
import _ImagePhotoFilter from 'material-ui/svg-icons/image/photo-filter';
import _ImagePhotoLibrary from 'material-ui/svg-icons/image/photo-library';
import _ImagePhotoSizeSelectActual from 'material-ui/svg-icons/image/photo-size-select-actual';
import _ImagePhotoSizeSelectLarge from 'material-ui/svg-icons/image/photo-size-select-large';
import _ImagePhotoSizeSelectSmall from 'material-ui/svg-icons/image/photo-size-select-small';
import _ImagePictureAsPdf from 'material-ui/svg-icons/image/picture-as-pdf';
import _ImagePortrait from 'material-ui/svg-icons/image/portrait';
import _ImageRemoveRedEye from 'material-ui/svg-icons/image/remove-red-eye';
import _ImageRotate90DegreesCcw from 'material-ui/svg-icons/image/rotate-90-degrees-ccw';
import _ImageRotateLeft from 'material-ui/svg-icons/image/rotate-left';
import _ImageRotateRight from 'material-ui/svg-icons/image/rotate-right';
import _ImageSlideshow from 'material-ui/svg-icons/image/slideshow';
import _ImageStraighten from 'material-ui/svg-icons/image/straighten';
import _ImageStyle from 'material-ui/svg-icons/image/style';
import _ImageSwitchCamera from 'material-ui/svg-icons/image/switch-camera';
import _ImageSwitchVideo from 'material-ui/svg-icons/image/switch-video';
import _ImageTagFaces from 'material-ui/svg-icons/image/tag-faces';
import _ImageTexture from 'material-ui/svg-icons/image/texture';
import _ImageTimelapse from 'material-ui/svg-icons/image/timelapse';
import _ImageTimer from 'material-ui/svg-icons/image/timer';
import _ImageTimer10 from 'material-ui/svg-icons/image/timer-10';
import _ImageTimer3 from 'material-ui/svg-icons/image/timer-3';
import _ImageTimerOff from 'material-ui/svg-icons/image/timer-off';
import _ImageTonality from 'material-ui/svg-icons/image/tonality';
import _ImageTransform from 'material-ui/svg-icons/image/transform';
import _ImageTune from 'material-ui/svg-icons/image/tune';
import _ImageViewComfy from 'material-ui/svg-icons/image/view-comfy';
import _ImageViewCompact from 'material-ui/svg-icons/image/view-compact';
import _ImageVignette from 'material-ui/svg-icons/image/vignette';
import _ImageWbAuto from 'material-ui/svg-icons/image/wb-auto';
import _ImageWbCloudy from 'material-ui/svg-icons/image/wb-cloudy';
import _ImageWbIncandescent from 'material-ui/svg-icons/image/wb-incandescent';
import _ImageWbIridescent from 'material-ui/svg-icons/image/wb-iridescent';
import _ImageWbSunny from 'material-ui/svg-icons/image/wb-sunny';
import _MapsAddLocation from 'material-ui/svg-icons/maps/add-location';
import _MapsBeenhere from 'material-ui/svg-icons/maps/beenhere';
import _MapsDirections from 'material-ui/svg-icons/maps/directions';
import _MapsDirectionsBike from 'material-ui/svg-icons/maps/directions-bike';
import _MapsDirectionsBoat from 'material-ui/svg-icons/maps/directions-boat';
import _MapsDirectionsBus from 'material-ui/svg-icons/maps/directions-bus';
import _MapsDirectionsCar from 'material-ui/svg-icons/maps/directions-car';
import _MapsDirectionsRailway from 'material-ui/svg-icons/maps/directions-railway';
import _MapsDirectionsRun from 'material-ui/svg-icons/maps/directions-run';
import _MapsDirectionsSubway from 'material-ui/svg-icons/maps/directions-subway';
import _MapsDirectionsTransit from 'material-ui/svg-icons/maps/directions-transit';
import _MapsDirectionsWalk from 'material-ui/svg-icons/maps/directions-walk';
import _MapsEditLocation from 'material-ui/svg-icons/maps/edit-location';
import _MapsEvStation from 'material-ui/svg-icons/maps/ev-station';
import _MapsFlight from 'material-ui/svg-icons/maps/flight';
import _MapsHotel from 'material-ui/svg-icons/maps/hotel';
import _MapsLayers from 'material-ui/svg-icons/maps/layers';
import _MapsLayersClear from 'material-ui/svg-icons/maps/layers-clear';
import _MapsLocalActivity from 'material-ui/svg-icons/maps/local-activity';
import _MapsLocalAirport from 'material-ui/svg-icons/maps/local-airport';
import _MapsLocalAtm from 'material-ui/svg-icons/maps/local-atm';
import _MapsLocalBar from 'material-ui/svg-icons/maps/local-bar';
import _MapsLocalCafe from 'material-ui/svg-icons/maps/local-cafe';
import _MapsLocalCarWash from 'material-ui/svg-icons/maps/local-car-wash';
import _MapsLocalConvenienceStore from 'material-ui/svg-icons/maps/local-convenience-store';
import _MapsLocalDining from 'material-ui/svg-icons/maps/local-dining';
import _MapsLocalDrink from 'material-ui/svg-icons/maps/local-drink';
import _MapsLocalFlorist from 'material-ui/svg-icons/maps/local-florist';
import _MapsLocalGasStation from 'material-ui/svg-icons/maps/local-gas-station';
import _MapsLocalGroceryStore from 'material-ui/svg-icons/maps/local-grocery-store';
import _MapsLocalHospital from 'material-ui/svg-icons/maps/local-hospital';
import _MapsLocalHotel from 'material-ui/svg-icons/maps/local-hotel';
import _MapsLocalLaundryService from 'material-ui/svg-icons/maps/local-laundry-service';
import _MapsLocalLibrary from 'material-ui/svg-icons/maps/local-library';
import _MapsLocalMall from 'material-ui/svg-icons/maps/local-mall';
import _MapsLocalMovies from 'material-ui/svg-icons/maps/local-movies';
import _MapsLocalOffer from 'material-ui/svg-icons/maps/local-offer';
import _MapsLocalParking from 'material-ui/svg-icons/maps/local-parking';
import _MapsLocalPharmacy from 'material-ui/svg-icons/maps/local-pharmacy';
import _MapsLocalPhone from 'material-ui/svg-icons/maps/local-phone';
import _MapsLocalPizza from 'material-ui/svg-icons/maps/local-pizza';
import _MapsLocalPlay from 'material-ui/svg-icons/maps/local-play';
import _MapsLocalPostOffice from 'material-ui/svg-icons/maps/local-post-office';
import _MapsLocalPrintshop from 'material-ui/svg-icons/maps/local-printshop';
import _MapsLocalSee from 'material-ui/svg-icons/maps/local-see';
import _MapsLocalShipping from 'material-ui/svg-icons/maps/local-shipping';
import _MapsLocalTaxi from 'material-ui/svg-icons/maps/local-taxi';
import _MapsMap from 'material-ui/svg-icons/maps/map';
import _MapsMyLocation from 'material-ui/svg-icons/maps/my-location';
import _MapsNavigation from 'material-ui/svg-icons/maps/navigation';
import _MapsNearMe from 'material-ui/svg-icons/maps/near-me';
import _MapsPersonPin from 'material-ui/svg-icons/maps/person-pin';
import _MapsPersonPinCircle from 'material-ui/svg-icons/maps/person-pin-circle';
import _MapsPinDrop from 'material-ui/svg-icons/maps/pin-drop';
import _MapsPlace from 'material-ui/svg-icons/maps/place';
import _MapsRateReview from 'material-ui/svg-icons/maps/rate-review';
import _MapsRestaurant from 'material-ui/svg-icons/maps/restaurant';
import _MapsRestaurantMenu from 'material-ui/svg-icons/maps/restaurant-menu';
import _MapsSatellite from 'material-ui/svg-icons/maps/satellite';
import _MapsStoreMallDirectory from 'material-ui/svg-icons/maps/store-mall-directory';
import _MapsStreetview from 'material-ui/svg-icons/maps/streetview';
import _MapsSubway from 'material-ui/svg-icons/maps/subway';
import _MapsTerrain from 'material-ui/svg-icons/maps/terrain';
import _MapsTraffic from 'material-ui/svg-icons/maps/traffic';
import _MapsTrain from 'material-ui/svg-icons/maps/train';
import _MapsTram from 'material-ui/svg-icons/maps/tram';
import _MapsTransferWithinAStation from 'material-ui/svg-icons/maps/transfer-within-a-station';
import _MapsZoomOutMap from 'material-ui/svg-icons/maps/zoom-out-map';
import _NavigationApps from 'material-ui/svg-icons/navigation/apps';
import _NavigationArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import _NavigationArrowDownward from 'material-ui/svg-icons/navigation/arrow-downward';
import _NavigationArrowDropDown from 'material-ui/svg-icons/navigation/arrow-drop-down';
import _NavigationArrowDropDownCircle from 'material-ui/svg-icons/navigation/arrow-drop-down-circle';
import _NavigationArrowDropUp from 'material-ui/svg-icons/navigation/arrow-drop-up';
import _NavigationArrowForward from 'material-ui/svg-icons/navigation/arrow-forward';
import _NavigationArrowUpward from 'material-ui/svg-icons/navigation/arrow-upward';
import _NavigationCancel from 'material-ui/svg-icons/navigation/cancel';
import _NavigationCheck from 'material-ui/svg-icons/navigation/check';
import _NavigationChevronLeft from 'material-ui/svg-icons/navigation/chevron-left';
import _NavigationChevronRight from 'material-ui/svg-icons/navigation/chevron-right';
import _NavigationClose from 'material-ui/svg-icons/navigation/close';
import _NavigationExpandLess from 'material-ui/svg-icons/navigation/expand-less';
import _NavigationExpandMore from 'material-ui/svg-icons/navigation/expand-more';
import _NavigationFirstPage from 'material-ui/svg-icons/navigation/first-page';
import _NavigationFullscreen from 'material-ui/svg-icons/navigation/fullscreen';
import _NavigationFullscreenExit from 'material-ui/svg-icons/navigation/fullscreen-exit';
import _NavigationLastPage from 'material-ui/svg-icons/navigation/last-page';
import _NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import _NavigationMoreHoriz from 'material-ui/svg-icons/navigation/more-horiz';
import _NavigationMoreVert from 'material-ui/svg-icons/navigation/more-vert';
import _NavigationRefresh from 'material-ui/svg-icons/navigation/refresh';
import _NavigationSubdirectoryArrowLeft from 'material-ui/svg-icons/navigation/subdirectory-arrow-left';
import _NavigationSubdirectoryArrowRight from 'material-ui/svg-icons/navigation/subdirectory-arrow-right';
import _NavigationUnfoldLess from 'material-ui/svg-icons/navigation/unfold-less';
import _NavigationUnfoldMore from 'material-ui/svg-icons/navigation/unfold-more';
import _NotificationAdb from 'material-ui/svg-icons/notification/adb';
import _NotificationAirlineSeatFlat from 'material-ui/svg-icons/notification/airline-seat-flat';
import _NotificationAirlineSeatFlatAngled from 'material-ui/svg-icons/notification/airline-seat-flat-angled';
import _NotificationAirlineSeatIndividualSuite from 'material-ui/svg-icons/notification/airline-seat-individual-suite';
import _NotificationAirlineSeatLegroomExtra from 'material-ui/svg-icons/notification/airline-seat-legroom-extra';
import _NotificationAirlineSeatLegroomNormal from 'material-ui/svg-icons/notification/airline-seat-legroom-normal';
import _NotificationAirlineSeatLegroomReduced from 'material-ui/svg-icons/notification/airline-seat-legroom-reduced';
import _NotificationAirlineSeatReclineExtra from 'material-ui/svg-icons/notification/airline-seat-recline-extra';
import _NotificationAirlineSeatReclineNormal from 'material-ui/svg-icons/notification/airline-seat-recline-normal';
import _NotificationBluetoothAudio from 'material-ui/svg-icons/notification/bluetooth-audio';
import _NotificationConfirmationNumber from 'material-ui/svg-icons/notification/confirmation-number';
import _NotificationDiscFull from 'material-ui/svg-icons/notification/disc-full';
import _NotificationDoNotDisturb from 'material-ui/svg-icons/notification/do-not-disturb';
import _NotificationDoNotDisturbAlt from 'material-ui/svg-icons/notification/do-not-disturb-alt';
import _NotificationDoNotDisturbOff from 'material-ui/svg-icons/notification/do-not-disturb-off';
import _NotificationDoNotDisturbOn from 'material-ui/svg-icons/notification/do-not-disturb-on';
import _NotificationDriveEta from 'material-ui/svg-icons/notification/drive-eta';
import _NotificationEnhancedEncryption from 'material-ui/svg-icons/notification/enhanced-encryption';
import _NotificationEventAvailable from 'material-ui/svg-icons/notification/event-available';
import _NotificationEventBusy from 'material-ui/svg-icons/notification/event-busy';
import _NotificationEventNote from 'material-ui/svg-icons/notification/event-note';
import _NotificationFolderSpecial from 'material-ui/svg-icons/notification/folder-special';
import _NotificationLiveTv from 'material-ui/svg-icons/notification/live-tv';
import _NotificationMms from 'material-ui/svg-icons/notification/mms';
import _NotificationMore from 'material-ui/svg-icons/notification/more';
import _NotificationNetworkCheck from 'material-ui/svg-icons/notification/network-check';
import _NotificationNetworkLocked from 'material-ui/svg-icons/notification/network-locked';
import _NotificationNoEncryption from 'material-ui/svg-icons/notification/no-encryption';
import _NotificationOndemandVideo from 'material-ui/svg-icons/notification/ondemand-video';
import _NotificationPersonalVideo from 'material-ui/svg-icons/notification/personal-video';
import _NotificationPhoneBluetoothSpeaker from 'material-ui/svg-icons/notification/phone-bluetooth-speaker';
import _NotificationPhoneForwarded from 'material-ui/svg-icons/notification/phone-forwarded';
import _NotificationPhoneInTalk from 'material-ui/svg-icons/notification/phone-in-talk';
import _NotificationPhoneLocked from 'material-ui/svg-icons/notification/phone-locked';
import _NotificationPhoneMissed from 'material-ui/svg-icons/notification/phone-missed';
import _NotificationPhonePaused from 'material-ui/svg-icons/notification/phone-paused';
import _NotificationPower from 'material-ui/svg-icons/notification/power';
import _NotificationPriorityHigh from 'material-ui/svg-icons/notification/priority-high';
import _NotificationRvHookup from 'material-ui/svg-icons/notification/rv-hookup';
import _NotificationSdCard from 'material-ui/svg-icons/notification/sd-card';
import _NotificationSimCardAlert from 'material-ui/svg-icons/notification/sim-card-alert';
import _NotificationSms from 'material-ui/svg-icons/notification/sms';
import _NotificationSmsFailed from 'material-ui/svg-icons/notification/sms-failed';
import _NotificationSync from 'material-ui/svg-icons/notification/sync';
import _NotificationSyncDisabled from 'material-ui/svg-icons/notification/sync-disabled';
import _NotificationSyncProblem from 'material-ui/svg-icons/notification/sync-problem';
import _NotificationSystemUpdate from 'material-ui/svg-icons/notification/system-update';
import _NotificationTapAndPlay from 'material-ui/svg-icons/notification/tap-and-play';
import _NotificationTimeToLeave from 'material-ui/svg-icons/notification/time-to-leave';
import _NotificationVibration from 'material-ui/svg-icons/notification/vibration';
import _NotificationVoiceChat from 'material-ui/svg-icons/notification/voice-chat';
import _NotificationVpnLock from 'material-ui/svg-icons/notification/vpn-lock';
import _NotificationWc from 'material-ui/svg-icons/notification/wc';
import _NotificationWifi from 'material-ui/svg-icons/notification/wifi';
import _PlacesAcUnit from 'material-ui/svg-icons/places/ac-unit';
import _PlacesAirportShuttle from 'material-ui/svg-icons/places/airport-shuttle';
import _PlacesAllInclusive from 'material-ui/svg-icons/places/all-inclusive';
import _PlacesBeachAccess from 'material-ui/svg-icons/places/beach-access';
import _PlacesBusinessCenter from 'material-ui/svg-icons/places/business-center';
import _PlacesCasino from 'material-ui/svg-icons/places/casino';
import _PlacesChildCare from 'material-ui/svg-icons/places/child-care';
import _PlacesChildFriendly from 'material-ui/svg-icons/places/child-friendly';
import _PlacesFitnessCenter from 'material-ui/svg-icons/places/fitness-center';
import _PlacesFreeBreakfast from 'material-ui/svg-icons/places/free-breakfast';
import _PlacesGolfCourse from 'material-ui/svg-icons/places/golf-course';
import _PlacesHotTub from 'material-ui/svg-icons/places/hot-tub';
import _PlacesKitchen from 'material-ui/svg-icons/places/kitchen';
import _PlacesPool from 'material-ui/svg-icons/places/pool';
import _PlacesRoomService from 'material-ui/svg-icons/places/room-service';
import _PlacesRvHookup from 'material-ui/svg-icons/places/rv-hookup';
import _PlacesSmokeFree from 'material-ui/svg-icons/places/smoke-free';
import _PlacesSmokingRooms from 'material-ui/svg-icons/places/smoking-rooms';
import _PlacesSpa from 'material-ui/svg-icons/places/spa';
import _SocialCake from 'material-ui/svg-icons/social/cake';
import _SocialDomain from 'material-ui/svg-icons/social/domain';
import _SocialGroup from 'material-ui/svg-icons/social/group';
import _SocialGroupAdd from 'material-ui/svg-icons/social/group-add';
import _SocialLocationCity from 'material-ui/svg-icons/social/location-city';
import _SocialMood from 'material-ui/svg-icons/social/mood';
import _SocialMoodBad from 'material-ui/svg-icons/social/mood-bad';
import _SocialNotifications from 'material-ui/svg-icons/social/notifications';
import _SocialNotificationsActive from 'material-ui/svg-icons/social/notifications-active';
import _SocialNotificationsNone from 'material-ui/svg-icons/social/notifications-none';
import _SocialNotificationsOff from 'material-ui/svg-icons/social/notifications-off';
import _SocialNotificationsPaused from 'material-ui/svg-icons/social/notifications-paused';
import _SocialPages from 'material-ui/svg-icons/social/pages';
import _SocialPartyMode from 'material-ui/svg-icons/social/party-mode';
import _SocialPeople from 'material-ui/svg-icons/social/people';
import _SocialPeopleOutline from 'material-ui/svg-icons/social/people-outline';
import _SocialPerson from 'material-ui/svg-icons/social/person';
import _SocialPersonAdd from 'material-ui/svg-icons/social/person-add';
import _SocialPersonOutline from 'material-ui/svg-icons/social/person-outline';
import _SocialPlusOne from 'material-ui/svg-icons/social/plus-one';
import _SocialPoll from 'material-ui/svg-icons/social/poll';
import _SocialPublic from 'material-ui/svg-icons/social/public';
import _SocialSchool from 'material-ui/svg-icons/social/school';
import _SocialSentimentDissatisfied from 'material-ui/svg-icons/social/sentiment-dissatisfied';
import _SocialSentimentNeutral from 'material-ui/svg-icons/social/sentiment-neutral';
import _SocialSentimentSatisfied from 'material-ui/svg-icons/social/sentiment-satisfied';
import _SocialSentimentVeryDissatisfied from 'material-ui/svg-icons/social/sentiment-very-dissatisfied';
import _SocialSentimentVerySatisfied from 'material-ui/svg-icons/social/sentiment-very-satisfied';
import _SocialShare from 'material-ui/svg-icons/social/share';
import _SocialWhatshot from 'material-ui/svg-icons/social/whatshot';
import _ToggleCheckBox from 'material-ui/svg-icons/toggle/check-box';
import _ToggleCheckBoxOutlineBlank from 'material-ui/svg-icons/toggle/check-box-outline-blank';
import _ToggleIndeterminateCheckBox from 'material-ui/svg-icons/toggle/indeterminate-check-box';
import _ToggleRadioButtonChecked from 'material-ui/svg-icons/toggle/radio-button-checked';
import _ToggleRadioButtonUnchecked from 'material-ui/svg-icons/toggle/radio-button-unchecked';
import _ToggleStar from 'material-ui/svg-icons/toggle/star';
import _ToggleStarBorder from 'material-ui/svg-icons/toggle/star-border';
import _ToggleStarHalf from 'material-ui/svg-icons/toggle/star-half';
// }}}
import _NavigationArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';
import {
// {{{ Generated with minodisk/gendts-material-ui-svg-icons
    ActionAccessibility,
    ActionAccessible,
    ActionAccountBalance,
    ActionAccountBalanceWallet,
    ActionAccountBox,
    ActionAccountCircle,
    ActionAddShoppingCart,
    ActionAlarm,
    ActionAlarmAdd,
    ActionAlarmOff,
    ActionAlarmOn,
    ActionAllOut,
    ActionAndroid,
    ActionAnnouncement,
    ActionAspectRatio,
    ActionAssessment,
    ActionAssignment,
    ActionAssignmentInd,
    ActionAssignmentLate,
    ActionAssignmentReturn,
    ActionAssignmentReturned,
    ActionAssignmentTurnedIn,
    ActionAutorenew,
    ActionBackup,
    ActionBook,
    ActionBookmark,
    ActionBookmarkBorder,
    ActionBugReport,
    ActionBuild,
    ActionCached,
    ActionCameraEnhance,
    ActionCardGiftcard,
    ActionCardMembership,
    ActionCardTravel,
    ActionChangeHistory,
    ActionCheckCircle,
    ActionChromeReaderMode,
    ActionClass,
    ActionCode,
    ActionCompareArrows,
    ActionCopyright,
    ActionCreditCard,
    ActionDashboard,
    ActionDateRange,
    ActionDelete,
    ActionDeleteForever,
    ActionDescription,
    ActionDns,
    ActionDone,
    ActionDoneAll,
    ActionDonutLarge,
    ActionDonutSmall,
    ActionEject,
    ActionEuroSymbol,
    ActionEvent,
    ActionEventSeat,
    ActionExitToApp,
    ActionExplore,
    ActionExtension,
    ActionFace,
    ActionFavorite,
    ActionFavoriteBorder,
    ActionFeedback,
    ActionFindInPage,
    ActionFindReplace,
    ActionFingerprint,
    ActionFlightLand,
    ActionFlightTakeoff,
    ActionFlipToBack,
    ActionFlipToFront,
    ActionGTranslate,
    ActionGavel,
    ActionGetApp,
    ActionGif,
    ActionGrade,
    ActionGroupWork,
    ActionHelp,
    ActionHelpOutline,
    ActionHighlightOff,
    ActionHistory,
    ActionHome,
    ActionHourglassEmpty,
    ActionHourglassFull,
    ActionHttp,
    ActionHttps,
    ActionImportantDevices,
    ActionInfo,
    ActionInfoOutline,
    ActionInput,
    ActionInvertColors,
    ActionLabel,
    ActionLabelOutline,
    ActionLanguage,
    ActionLaunch,
    ActionLightbulbOutline,
    ActionLineStyle,
    ActionLineWeight,
    ActionList,
    ActionLock,
    ActionLockOpen,
    ActionLockOutline,
    ActionLoyalty,
    ActionMarkunreadMailbox,
    ActionMotorcycle,
    ActionNoteAdd,
    ActionOfflinePin,
    ActionOpacity,
    ActionOpenInBrowser,
    ActionOpenInNew,
    ActionOpenWith,
    ActionPageview,
    ActionPanTool,
    ActionPayment,
    ActionPermCameraMic,
    ActionPermContactCalendar,
    ActionPermDataSetting,
    ActionPermDeviceInformation,
    ActionPermIdentity,
    ActionPermMedia,
    ActionPermPhoneMsg,
    ActionPermScanWifi,
    ActionPets,
    ActionPictureInPicture,
    ActionPictureInPictureAlt,
    ActionPlayForWork,
    ActionPolymer,
    ActionPowerSettingsNew,
    ActionPregnantWoman,
    ActionPrint,
    ActionQueryBuilder,
    ActionQuestionAnswer,
    ActionReceipt,
    ActionRecordVoiceOver,
    ActionRedeem,
    ActionRemoveShoppingCart,
    ActionReorder,
    ActionReportProblem,
    ActionRestore,
    ActionRestorePage,
    ActionRoom,
    ActionRoundedCorner,
    ActionRowing,
    ActionSchedule,
    ActionSearch,
    ActionSettings,
    ActionSettingsApplications,
    ActionSettingsBackupRestore,
    ActionSettingsBluetooth,
    ActionSettingsBrightness,
    ActionSettingsCell,
    ActionSettingsEthernet,
    ActionSettingsInputAntenna,
    ActionSettingsInputComponent,
    ActionSettingsInputComposite,
    ActionSettingsInputHdmi,
    ActionSettingsInputSvideo,
    ActionSettingsOverscan,
    ActionSettingsPhone,
    ActionSettingsPower,
    ActionSettingsRemote,
    ActionSettingsVoice,
    ActionShop,
    ActionShopTwo,
    ActionShoppingBasket,
    ActionShoppingCart,
    ActionSpeakerNotes,
    ActionSpeakerNotesOff,
    ActionSpellcheck,
    ActionStars,
    ActionStore,
    ActionSubject,
    ActionSupervisorAccount,
    ActionSwapHoriz,
    ActionSwapVert,
    ActionSwapVerticalCircle,
    ActionSystemUpdateAlt,
    ActionTab,
    ActionTabUnselected,
    ActionTheaters,
    ActionThreeDRotation,
    ActionThumbDown,
    ActionThumbUp,
    ActionThumbsUpDown,
    ActionTimeline,
    ActionToc,
    ActionToday,
    ActionToll,
    ActionTouchApp,
    ActionTrackChanges,
    ActionTranslate,
    ActionTrendingDown,
    ActionTrendingFlat,
    ActionTrendingUp,
    ActionTurnedIn,
    ActionTurnedInNot,
    ActionUpdate,
    ActionVerifiedUser,
    ActionViewAgenda,
    ActionViewArray,
    ActionViewCarousel,
    ActionViewColumn,
    ActionViewDay,
    ActionViewHeadline,
    ActionViewList,
    ActionViewModule,
    ActionViewQuilt,
    ActionViewStream,
    ActionViewWeek,
    ActionVisibility,
    ActionVisibilityOff,
    ActionWatchLater,
    ActionWork,
    ActionYoutubeSearchedFor,
    ActionZoomIn,
    ActionZoomOut,
    AlertAddAlert,
    AlertError,
    AlertErrorOutline,
    AlertWarning,
    AvAddToQueue,
    AvAirplay,
    AvAlbum,
    AvArtTrack,
    AvAvTimer,
    AvBrandingWatermark,
    AvCallToAction,
    AvClosedCaption,
    AvEqualizer,
    AvExplicit,
    AvFastForward,
    AvFastRewind,
    AvFeaturedPlayList,
    AvFeaturedVideo,
    AvFiberDvr,
    AvFiberManualRecord,
    AvFiberNew,
    AvFiberPin,
    AvFiberSmartRecord,
    AvForward10,
    AvForward30,
    AvForward5,
    AvGames,
    AvHd,
    AvHearing,
    AvHighQuality,
    AvLibraryAdd,
    AvLibraryBooks,
    AvLibraryMusic,
    AvLoop,
    AvMic,
    AvMicNone,
    AvMicOff,
    AvMovie,
    AvMusicVideo,
    AvNewReleases,
    AvNotInterested,
    AvNote,
    AvPause,
    AvPauseCircleFilled,
    AvPauseCircleOutline,
    AvPlayArrow,
    AvPlayCircleFilled,
    AvPlayCircleOutline,
    AvPlaylistAdd,
    AvPlaylistAddCheck,
    AvPlaylistPlay,
    AvQueue,
    AvQueueMusic,
    AvQueuePlayNext,
    AvRadio,
    AvRecentActors,
    AvRemoveFromQueue,
    AvRepeat,
    AvRepeatOne,
    AvReplay,
    AvReplay10,
    AvReplay30,
    AvReplay5,
    AvShuffle,
    AvSkipNext,
    AvSkipPrevious,
    AvSlowMotionVideo,
    AvSnooze,
    AvSortByAlpha,
    AvStop,
    AvSubscriptions,
    AvSubtitles,
    AvSurroundSound,
    AvVideoCall,
    AvVideoLabel,
    AvVideoLibrary,
    AvVideocam,
    AvVideocamOff,
    AvVolumeDown,
    AvVolumeMute,
    AvVolumeOff,
    AvVolumeUp,
    AvWeb,
    AvWebAsset,
    CommunicationBusiness,
    CommunicationCall,
    CommunicationCallEnd,
    CommunicationCallMade,
    CommunicationCallMerge,
    CommunicationCallMissed,
    CommunicationCallMissedOutgoing,
    CommunicationCallReceived,
    CommunicationCallSplit,
    CommunicationChat,
    CommunicationChatBubble,
    CommunicationChatBubbleOutline,
    CommunicationClearAll,
    CommunicationComment,
    CommunicationContactMail,
    CommunicationContactPhone,
    CommunicationContacts,
    CommunicationDialerSip,
    CommunicationDialpad,
    CommunicationEmail,
    CommunicationForum,
    CommunicationImportContacts,
    CommunicationImportExport,
    CommunicationInvertColorsOff,
    CommunicationLiveHelp,
    CommunicationLocationOff,
    CommunicationLocationOn,
    CommunicationMailOutline,
    CommunicationMessage,
    CommunicationNoSim,
    CommunicationPhone,
    CommunicationPhonelinkErase,
    CommunicationPhonelinkLock,
    CommunicationPhonelinkRing,
    CommunicationPhonelinkSetup,
    CommunicationPortableWifiOff,
    CommunicationPresentToAll,
    CommunicationRingVolume,
    CommunicationRssFeed,
    CommunicationScreenShare,
    CommunicationSpeakerPhone,
    CommunicationStayCurrentLandscape,
    CommunicationStayCurrentPortrait,
    CommunicationStayPrimaryLandscape,
    CommunicationStayPrimaryPortrait,
    CommunicationStopScreenShare,
    CommunicationSwapCalls,
    CommunicationTextsms,
    CommunicationVoicemail,
    CommunicationVpnKey,
    ContentAdd,
    ContentAddBox,
    ContentAddCircle,
    ContentAddCircleOutline,
    ContentArchive,
    ContentBackspace,
    ContentBlock,
    ContentClear,
    ContentContentCopy,
    ContentContentCut,
    ContentContentPaste,
    ContentCreate,
    ContentDeleteSweep,
    ContentDrafts,
    ContentFilterList,
    ContentFlag,
    ContentFontDownload,
    ContentForward,
    ContentGesture,
    ContentInbox,
    ContentLink,
    ContentLowPriority,
    ContentMail,
    ContentMarkunread,
    ContentMoveToInbox,
    ContentNextWeek,
    ContentRedo,
    ContentRemove,
    ContentRemoveCircle,
    ContentRemoveCircleOutline,
    ContentReply,
    ContentReplyAll,
    ContentReport,
    ContentSave,
    ContentSelectAll,
    ContentSend,
    ContentSort,
    ContentTextFormat,
    ContentUnarchive,
    ContentUndo,
    ContentWeekend,
    DeviceAccessAlarm,
    DeviceAccessAlarms,
    DeviceAccessTime,
    DeviceAddAlarm,
    DeviceAirplanemodeActive,
    DeviceAirplanemodeInactive,
    DeviceBattery20,
    DeviceBattery30,
    DeviceBattery50,
    DeviceBattery60,
    DeviceBattery80,
    DeviceBattery90,
    DeviceBatteryAlert,
    DeviceBatteryCharging20,
    DeviceBatteryCharging30,
    DeviceBatteryCharging50,
    DeviceBatteryCharging60,
    DeviceBatteryCharging80,
    DeviceBatteryCharging90,
    DeviceBatteryChargingFull,
    DeviceBatteryFull,
    DeviceBatteryStd,
    DeviceBatteryUnknown,
    DeviceBluetooth,
    DeviceBluetoothConnected,
    DeviceBluetoothDisabled,
    DeviceBluetoothSearching,
    DeviceBrightnessAuto,
    DeviceBrightnessHigh,
    DeviceBrightnessLow,
    DeviceBrightnessMedium,
    DeviceDataUsage,
    DeviceDeveloperMode,
    DeviceDevices,
    DeviceDvr,
    DeviceGpsFixed,
    DeviceGpsNotFixed,
    DeviceGpsOff,
    DeviceGraphicEq,
    DeviceLocationDisabled,
    DeviceLocationSearching,
    DeviceNetworkCell,
    DeviceNetworkWifi,
    DeviceNfc,
    DeviceScreenLockLandscape,
    DeviceScreenLockPortrait,
    DeviceScreenLockRotation,
    DeviceScreenRotation,
    DeviceSdStorage,
    DeviceSettingsSystemDaydream,
    DeviceSignalCellular0Bar,
    DeviceSignalCellular1Bar,
    DeviceSignalCellular2Bar,
    DeviceSignalCellular3Bar,
    DeviceSignalCellular4Bar,
    DeviceSignalCellularConnectedNoInternet0Bar,
    DeviceSignalCellularConnectedNoInternet1Bar,
    DeviceSignalCellularConnectedNoInternet2Bar,
    DeviceSignalCellularConnectedNoInternet3Bar,
    DeviceSignalCellularConnectedNoInternet4Bar,
    DeviceSignalCellularNoSim,
    DeviceSignalCellularNull,
    DeviceSignalCellularOff,
    DeviceSignalWifi0Bar,
    DeviceSignalWifi1Bar,
    DeviceSignalWifi1BarLock,
    DeviceSignalWifi2Bar,
    DeviceSignalWifi2BarLock,
    DeviceSignalWifi3Bar,
    DeviceSignalWifi3BarLock,
    DeviceSignalWifi4Bar,
    DeviceSignalWifi4BarLock,
    DeviceSignalWifiOff,
    DeviceStorage,
    DeviceUsb,
    DeviceWallpaper,
    DeviceWidgets,
    DeviceWifiLock,
    DeviceWifiTethering,
    EditorAttachFile,
    EditorAttachMoney,
    EditorBorderAll,
    EditorBorderBottom,
    EditorBorderClear,
    EditorBorderColor,
    EditorBorderHorizontal,
    EditorBorderInner,
    EditorBorderLeft,
    EditorBorderOuter,
    EditorBorderRight,
    EditorBorderStyle,
    EditorBorderTop,
    EditorBorderVertical,
    EditorBubbleChart,
    EditorDragHandle,
    EditorFormatAlignCenter,
    EditorFormatAlignJustify,
    EditorFormatAlignLeft,
    EditorFormatAlignRight,
    EditorFormatBold,
    EditorFormatClear,
    EditorFormatColorFill,
    EditorFormatColorReset,
    EditorFormatColorText,
    EditorFormatIndentDecrease,
    EditorFormatIndentIncrease,
    EditorFormatItalic,
    EditorFormatLineSpacing,
    EditorFormatListBulleted,
    EditorFormatListNumbered,
    EditorFormatPaint,
    EditorFormatQuote,
    EditorFormatShapes,
    EditorFormatSize,
    EditorFormatStrikethrough,
    EditorFormatTextdirectionLToR,
    EditorFormatTextdirectionRToL,
    EditorFormatUnderlined,
    EditorFunctions,
    EditorHighlight,
    EditorInsertChart,
    EditorInsertComment,
    EditorInsertDriveFile,
    EditorInsertEmoticon,
    EditorInsertInvitation,
    EditorInsertLink,
    EditorInsertPhoto,
    EditorLinearScale,
    EditorMergeType,
    EditorModeComment,
    EditorModeEdit,
    EditorMonetizationOn,
    EditorMoneyOff,
    EditorMultilineChart,
    EditorPieChart,
    EditorPieChartOutlined,
    EditorPublish,
    EditorShortText,
    EditorShowChart,
    EditorSpaceBar,
    EditorStrikethroughS,
    EditorTextFields,
    EditorTitle,
    EditorVerticalAlignBottom,
    EditorVerticalAlignCenter,
    EditorVerticalAlignTop,
    EditorWrapText,
    FileAttachment,
    FileCloud,
    FileCloudCircle,
    FileCloudDone,
    FileCloudDownload,
    FileCloudOff,
    FileCloudQueue,
    FileCloudUpload,
    FileCreateNewFolder,
    FileFileDownload,
    FileFileUpload,
    FileFolder,
    FileFolderOpen,
    FileFolderShared,
    HardwareCast,
    HardwareCastConnected,
    HardwareComputer,
    HardwareDesktopMac,
    HardwareDesktopWindows,
    HardwareDeveloperBoard,
    HardwareDeviceHub,
    HardwareDevicesOther,
    HardwareDock,
    HardwareGamepad,
    HardwareHeadset,
    HardwareHeadsetMic,
    HardwareKeyboard,
    HardwareKeyboardArrowDown,
    HardwareKeyboardArrowLeft,
    HardwareKeyboardArrowRight,
    HardwareKeyboardArrowUp,
    HardwareKeyboardBackspace,
    HardwareKeyboardCapslock,
    HardwareKeyboardHide,
    HardwareKeyboardReturn,
    HardwareKeyboardTab,
    HardwareKeyboardVoice,
    HardwareLaptop,
    HardwareLaptopChromebook,
    HardwareLaptopMac,
    HardwareLaptopWindows,
    HardwareMemory,
    HardwareMouse,
    HardwarePhoneAndroid,
    HardwarePhoneIphone,
    HardwarePhonelink,
    HardwarePhonelinkOff,
    HardwarePowerInput,
    HardwareRouter,
    HardwareScanner,
    HardwareSecurity,
    HardwareSimCard,
    HardwareSmartphone,
    HardwareSpeaker,
    HardwareSpeakerGroup,
    HardwareTablet,
    HardwareTabletAndroid,
    HardwareTabletMac,
    HardwareToys,
    HardwareTv,
    HardwareVideogameAsset,
    HardwareWatch,
    ImageAddAPhoto,
    ImageAddToPhotos,
    ImageAdjust,
    ImageAssistant,
    ImageAssistantPhoto,
    ImageAudiotrack,
    ImageBlurCircular,
    ImageBlurLinear,
    ImageBlurOff,
    ImageBlurOn,
    ImageBrightness1,
    ImageBrightness2,
    ImageBrightness3,
    ImageBrightness4,
    ImageBrightness5,
    ImageBrightness6,
    ImageBrightness7,
    ImageBrokenImage,
    ImageBrush,
    ImageBurstMode,
    ImageCamera,
    ImageCameraAlt,
    ImageCameraFront,
    ImageCameraRear,
    ImageCameraRoll,
    ImageCenterFocusStrong,
    ImageCenterFocusWeak,
    ImageCollections,
    ImageCollectionsBookmark,
    ImageColorLens,
    ImageColorize,
    ImageCompare,
    ImageControlPoint,
    ImageControlPointDuplicate,
    ImageCrop,
    ImageCrop169,
    ImageCrop32,
    ImageCrop54,
    ImageCrop75,
    ImageCropDin,
    ImageCropFree,
    ImageCropLandscape,
    ImageCropOriginal,
    ImageCropPortrait,
    ImageCropRotate,
    ImageCropSquare,
    ImageDehaze,
    ImageDetails,
    ImageEdit,
    ImageExposure,
    ImageExposureNeg1,
    ImageExposureNeg2,
    ImageExposurePlus1,
    ImageExposurePlus2,
    ImageExposureZero,
    ImageFilter,
    ImageFilter1,
    ImageFilter2,
    ImageFilter3,
    ImageFilter4,
    ImageFilter5,
    ImageFilter6,
    ImageFilter7,
    ImageFilter8,
    ImageFilter9,
    ImageFilter9Plus,
    ImageFilterBAndW,
    ImageFilterCenterFocus,
    ImageFilterDrama,
    ImageFilterFrames,
    ImageFilterHdr,
    ImageFilterNone,
    ImageFilterTiltShift,
    ImageFilterVintage,
    ImageFlare,
    ImageFlashAuto,
    ImageFlashOff,
    ImageFlashOn,
    ImageFlip,
    ImageGradient,
    ImageGrain,
    ImageGridOff,
    ImageGridOn,
    ImageHdrOff,
    ImageHdrOn,
    ImageHdrStrong,
    ImageHdrWeak,
    ImageHealing,
    ImageImage,
    ImageImageAspectRatio,
    ImageIso,
    ImageLandscape,
    ImageLeakAdd,
    ImageLeakRemove,
    ImageLens,
    ImageLinkedCamera,
    ImageLooks,
    ImageLooks3,
    ImageLooks4,
    ImageLooks5,
    ImageLooks6,
    ImageLooksOne,
    ImageLooksTwo,
    ImageLoupe,
    ImageMonochromePhotos,
    ImageMovieCreation,
    ImageMovieFilter,
    ImageMusicNote,
    ImageNature,
    ImageNaturePeople,
    ImageNavigateBefore,
    ImageNavigateNext,
    ImagePalette,
    ImagePanorama,
    ImagePanoramaFishEye,
    ImagePanoramaHorizontal,
    ImagePanoramaVertical,
    ImagePanoramaWideAngle,
    ImagePhoto,
    ImagePhotoAlbum,
    ImagePhotoCamera,
    ImagePhotoFilter,
    ImagePhotoLibrary,
    ImagePhotoSizeSelectActual,
    ImagePhotoSizeSelectLarge,
    ImagePhotoSizeSelectSmall,
    ImagePictureAsPdf,
    ImagePortrait,
    ImageRemoveRedEye,
    ImageRotate90DegreesCcw,
    ImageRotateLeft,
    ImageRotateRight,
    ImageSlideshow,
    ImageStraighten,
    ImageStyle,
    ImageSwitchCamera,
    ImageSwitchVideo,
    ImageTagFaces,
    ImageTexture,
    ImageTimelapse,
    ImageTimer,
    ImageTimer10,
    ImageTimer3,
    ImageTimerOff,
    ImageTonality,
    ImageTransform,
    ImageTune,
    ImageViewComfy,
    ImageViewCompact,
    ImageVignette,
    ImageWbAuto,
    ImageWbCloudy,
    ImageWbIncandescent,
    ImageWbIridescent,
    ImageWbSunny,
    MapsAddLocation,
    MapsBeenhere,
    MapsDirections,
    MapsDirectionsBike,
    MapsDirectionsBoat,
    MapsDirectionsBus,
    MapsDirectionsCar,
    MapsDirectionsRailway,
    MapsDirectionsRun,
    MapsDirectionsSubway,
    MapsDirectionsTransit,
    MapsDirectionsWalk,
    MapsEditLocation,
    MapsEvStation,
    MapsFlight,
    MapsHotel,
    MapsLayers,
    MapsLayersClear,
    MapsLocalActivity,
    MapsLocalAirport,
    MapsLocalAtm,
    MapsLocalBar,
    MapsLocalCafe,
    MapsLocalCarWash,
    MapsLocalConvenienceStore,
    MapsLocalDining,
    MapsLocalDrink,
    MapsLocalFlorist,
    MapsLocalGasStation,
    MapsLocalGroceryStore,
    MapsLocalHospital,
    MapsLocalHotel,
    MapsLocalLaundryService,
    MapsLocalLibrary,
    MapsLocalMall,
    MapsLocalMovies,
    MapsLocalOffer,
    MapsLocalParking,
    MapsLocalPharmacy,
    MapsLocalPhone,
    MapsLocalPizza,
    MapsLocalPlay,
    MapsLocalPostOffice,
    MapsLocalPrintshop,
    MapsLocalSee,
    MapsLocalShipping,
    MapsLocalTaxi,
    MapsMap,
    MapsMyLocation,
    MapsNavigation,
    MapsNearMe,
    MapsPersonPin,
    MapsPersonPinCircle,
    MapsPinDrop,
    MapsPlace,
    MapsRateReview,
    MapsRestaurant,
    MapsRestaurantMenu,
    MapsSatellite,
    MapsStoreMallDirectory,
    MapsStreetview,
    MapsSubway,
    MapsTerrain,
    MapsTraffic,
    MapsTrain,
    MapsTram,
    MapsTransferWithinAStation,
    MapsZoomOutMap,
    NavigationApps,
    NavigationArrowBack,
    NavigationArrowDownward,
    NavigationArrowDropDown,
    NavigationArrowDropDownCircle,
    NavigationArrowDropUp,
    NavigationArrowForward,
    NavigationArrowUpward,
    NavigationCancel,
    NavigationCheck,
    NavigationChevronLeft,
    NavigationChevronRight,
    NavigationClose,
    NavigationExpandLess,
    NavigationExpandMore,
    NavigationFirstPage,
    NavigationFullscreen,
    NavigationFullscreenExit,
    NavigationLastPage,
    NavigationMenu,
    NavigationMoreHoriz,
    NavigationMoreVert,
    NavigationRefresh,
    NavigationSubdirectoryArrowLeft,
    NavigationSubdirectoryArrowRight,
    NavigationUnfoldLess,
    NavigationUnfoldMore,
    NotificationAdb,
    NotificationAirlineSeatFlat,
    NotificationAirlineSeatFlatAngled,
    NotificationAirlineSeatIndividualSuite,
    NotificationAirlineSeatLegroomExtra,
    NotificationAirlineSeatLegroomNormal,
    NotificationAirlineSeatLegroomReduced,
    NotificationAirlineSeatReclineExtra,
    NotificationAirlineSeatReclineNormal,
    NotificationBluetoothAudio,
    NotificationConfirmationNumber,
    NotificationDiscFull,
    NotificationDoNotDisturb,
    NotificationDoNotDisturbAlt,
    NotificationDoNotDisturbOff,
    NotificationDoNotDisturbOn,
    NotificationDriveEta,
    NotificationEnhancedEncryption,
    NotificationEventAvailable,
    NotificationEventBusy,
    NotificationEventNote,
    NotificationFolderSpecial,
    NotificationLiveTv,
    NotificationMms,
    NotificationMore,
    NotificationNetworkCheck,
    NotificationNetworkLocked,
    NotificationNoEncryption,
    NotificationOndemandVideo,
    NotificationPersonalVideo,
    NotificationPhoneBluetoothSpeaker,
    NotificationPhoneForwarded,
    NotificationPhoneInTalk,
    NotificationPhoneLocked,
    NotificationPhoneMissed,
    NotificationPhonePaused,
    NotificationPower,
    NotificationPriorityHigh,
    NotificationRvHookup,
    NotificationSdCard,
    NotificationSimCardAlert,
    NotificationSms,
    NotificationSmsFailed,
    NotificationSync,
    NotificationSyncDisabled,
    NotificationSyncProblem,
    NotificationSystemUpdate,
    NotificationTapAndPlay,
    NotificationTimeToLeave,
    NotificationVibration,
    NotificationVoiceChat,
    NotificationVpnLock,
    NotificationWc,
    NotificationWifi,
    PlacesAcUnit,
    PlacesAirportShuttle,
    PlacesAllInclusive,
    PlacesBeachAccess,
    PlacesBusinessCenter,
    PlacesCasino,
    PlacesChildCare,
    PlacesChildFriendly,
    PlacesFitnessCenter,
    PlacesFreeBreakfast,
    PlacesGolfCourse,
    PlacesHotTub,
    PlacesKitchen,
    PlacesPool,
    PlacesRoomService,
    PlacesRvHookup,
    PlacesSmokeFree,
    PlacesSmokingRooms,
    PlacesSpa,
    SocialCake,
    SocialDomain,
    SocialGroup,
    SocialGroupAdd,
    SocialLocationCity,
    SocialMood,
    SocialMoodBad,
    SocialNotifications,
    SocialNotificationsActive,
    SocialNotificationsNone,
    SocialNotificationsOff,
    SocialNotificationsPaused,
    SocialPages,
    SocialPartyMode,
    SocialPeople,
    SocialPeopleOutline,
    SocialPerson,
    SocialPersonAdd,
    SocialPersonOutline,
    SocialPlusOne,
    SocialPoll,
    SocialPublic,
    SocialSchool,
    SocialSentimentDissatisfied,
    SocialSentimentNeutral,
    SocialSentimentSatisfied,
    SocialSentimentVeryDissatisfied,
    SocialSentimentVerySatisfied,
    SocialShare,
    SocialWhatshot,
    ToggleCheckBox,
    ToggleCheckBoxOutlineBlank,
    ToggleIndeterminateCheckBox,
    ToggleRadioButtonChecked,
    ToggleRadioButtonUnchecked,
    ToggleStar,
    ToggleStarBorder,
    ToggleStarHalf,
// }}}
    NavigationArrowDropRight,
} from 'material-ui/svg-icons';
import {
    cyan500, cyan700, grey100, grey300, grey400, grey500, pinkA200, white, darkBlack, fullBlack, blue300, indigo900,
    orange200, deepOrange300, pink400, purple500, fullWhite, blue500, red500, greenA200, yellow500, transparent,
    yellow600, indigo500, lightBlack, orange500
 } from 'material-ui/styles/colors';
import { fade } from 'material-ui/utils/colorManipulator';
import { default as withWidth } from 'material-ui/utils/withWidth';
import {
  AppBarProps,
  AutoCompleteProps,
  AvatarProps,
  BadgeProps,
  BottomNavigationProps,
  BottomNavigationItemProps,
  CardProps,
  CardActionsProps,
  CardHeaderProps,
  CardMediaProps,
  CardTextProps,
  CardTitleProps,
  CheckboxProps,
  ChipProps,
  CircularProgressProps,
  DatePickerProps,
  DialogProps,
  DividerProps,
  DrawerProps,
  DropDownMenuProps,
  FlatButtonProps,
  FloatingActionButtonProps,
  FontIconProps,
  GridListProps,
  GridTileProps,
  IconButtonProps,
  IconMenuProps,
  LinearProgressProps,
  ListProps,
  ListItemProps,
  MenuProps,
  MenuItemProps,
  PaperProps,
  PopoverProps,
  RadioButtonProps,
  RadioButtonGroupProps,
  RaisedButtonProps,
  RefreshIndicatorProps,
  SelectFieldProps,
  SliderProps,
  SubheaderProps,
  SvgIconProps,
  StepProps,
  StepButtonProps,
  StepContentProps,
  StepLabelProps,
  StepperProps,
  SnackbarProps,
  TabProps,
  TabsProps,
  TableProps,
  TableBodyProps,
  TableFooterProps,
  TableHeaderProps,
  TableHeaderColumnProps,
  TableRowProps,
  TableRowColumnProps,
  TextFieldProps,
  TimePickerProps,
  ToggleProps,
  ToolbarProps,
  ToolbarGroupProps,
  ToolbarSeparatorProps,
  ToolbarTitleProps,
} from 'material-ui';

import injectTapEventPlugin = require('react-tap-event-plugin');

// Needed for onTouchTap
// Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

function handleTouchTap() {
  alert('onTouchTap triggered on the title component');
}

const styles: { [key: string]: React.CSSProperties } = {
  title: {
    cursor: 'pointer',
  },
  exampleImageInput: {
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: '100%',
    opacity: 0,
  },
  button: {
    margin: 12,
  },
  chip: {
    margin: 4
  },
  smallIcon: {
    width: 36,
    height: 36,
  },
  mediumIcon: {
    width: 48,
    height: 48,
  },
  largeIcon: {
    width: 60,
    height: 60,
  },
  small: {
    width: 72,
    height: 72,
    padding: 16,
  },
  medium: {
    width: 96,
    height: 96,
    padding: 24,
  },
  large: {
    width: 120,
    height: 120,
    padding: 30,
  },
  radioButton: {
    marginTop: 16,
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap' as 'wrap',
    justifyContent: 'space-around' as 'space-around',
  },
  gridList: {
    width: 500,
    height: 500,
    overflowY: 'auto',
    marginBottom: 24,
  },
  paper: {
    display: 'inline-block',
    float: 'left',
    margin: '16px 32px 16px 0',
  },
  rightIcon: {
    textAlign: 'center',
    lineHeight: '24px',
  },
  customWidth: {
    width: 200,
  },
  h3: {
    marginTop: 20,
    fontWeight: 400 as 400,
  },
  block: {
    display: 'flex',
    maxWidth: 250,
  },
  block2: {
    margin: 10,
  },
  container: {
    position: 'relative',
  },
  refresh: {
    display: 'inline-block',
    position: 'relative',
  },
  checkbox: {
    marginBottom: 16,
  },
  toggle: {
    marginBottom: 16,
  },
  propContainer: {
    width: 200,
    overflow: 'hidden',
    margin: '20px auto 0',
  },
  propToggleHeader: {
    margin: '20px auto 10px',
  },
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400 as 400,
  },
  errorStyle: {
    color: orange500,
  },
  underlineStyle: {
    borderColor: orange500,
  },
  floatingLabelStyle: {
    color: orange500,
  },
  floatingLabelFocusStyle: {
    color: blue500,
  },
  inputStyle: {
    width: '100%',
  }
};

const style = {
  marginRight: 20,
  marginLeft: 20,
  display: 'inline-block',
  margin: '16px 32px 16px 0',
};

const customContentStyle = {
  width: '100%',
  maxWidth: 'none',
};

const iconStyles = {
  marginRight: 24,
};

// "http://www.material-ui.com/#/customization/themes"

// This replaces the textColor value on the palette
// and then update the keys for each component that depends on it.
// More on Colors: http://www.material-ui.com/#/customization/colors
const muiTheme = getMuiTheme({
  palette: {
    textColor: cyan500,
  },
  appBar: {
    height: 50,
  },
});

const darkMuiTheme = getMuiTheme(darkBaseTheme);

const lightBaseTheme = {
  spacing: {
    iconSize: 24,
    desktopGutter: 24,
    desktopGutterMore: 32,
    desktopGutterLess: 16,
    desktopGutterMini: 8,
    desktopKeylineIncrement: 64,
    desktopDropDownMenuItemHeight: 32,
    desktopDropDownMenuFontSize: 15,
    desktopDrawerMenuItemHeight: 48,
    desktopSubheaderHeight: 48,
    desktopToolbarHeight: 56,
  },
  button: {
    textTransform: "lowercase"
  },
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: cyan500,
    primary2Color: cyan700,
    primary3Color: grey400,
    accent1Color: pinkA200,
    accent2Color: grey100,
    accent3Color: grey500,
    textColor: darkBlack,
    alternateTextColor: white,
    canvasColor: white,
    borderColor: grey300,
    disabledColor: fade(darkBlack, 0.3),
    pickerHeaderColor: cyan500,
    clockCircleColor: fade(darkBlack, 0.07),
    shadowColor: fullBlack,
  },
};

const lightMuiTheme = getMuiTheme(lightBaseTheme);

class DeepDownTheTree extends React.Component<{} & {muiTheme: MuiTheme}> {
  static propTypes: React.ValidationMap<any> = {
    muiTheme: React.PropTypes.object.isRequired,
  };

  render() {
    return (
      <span style={{color: this.props.muiTheme.palette.textColor}}>
        Hello World!
      </span>
    );
  }
}

interface Props {
  label: string;
  muiTheme?: MuiTheme;
}
const MuiThemeableFunction = muiThemeable()<React.StatelessComponent<Props>, Props>(props => {
  return (
      <span style={{color: props.muiTheme.palette.textColor}}>
        Applied the Theme to functional component: {props.label}.
      </span>
  );
});

@muiThemeable()
class MuiThemeableClass extends React.Component<{label: string} & {muiTheme?: MuiTheme}> {
  render() {
    return (
      <span style={{color: this.props.muiTheme.palette.textColor}}>
        Applied the Theme to class component decorated: {this.props.label}.
      </span>
    );
  }
}

const MuiThemeableContainer = (props: {}) => (
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <div>
      <MuiThemeableFunction label='Hello'/>
      <MuiThemeableClass label='Hello'/>
    </div>
  </MuiThemeProvider>
);

// "http://www.material-ui.com/#/customization/inline-styles"
const InlineStylesCheckbox = () => (
  <Checkbox
    id="checkboxId1"
    name="checkboxName1"
    value="checkboxValue1"
    label="went for a run today"
    style={{
      width: '50%',
      margin: '0 auto'
    }}
    iconStyle={{
      fill: '#FF4081'
    }}
  />
);

// "http://www.material-ui.com/#/components/app-bar"
const AppBarExampleIcon = () => (
  <AppBar
    title="Title"
    iconClassNameRight="muidocs-icon-navigation-expand-more"
  />
);

const AppBarExampleIconButton = () => (
  <AppBar
    title={<span style={styles.title}>Title</span>}
    onTitleTouchTap={handleTouchTap}
    iconElementLeft={<IconButton><NavigationClose /></IconButton>}
    iconElementRight={<FlatButton label="Save" />}
  />
);

const AppBarExampleIconMenu = () => (
  <AppBar
    title="Title"
    iconElementLeft={<IconButton><NavigationClose /></IconButton>}
    iconElementRight={
      <IconMenu
        iconButtonElement={
          <IconButton><NavigationMoreVert /></IconButton>
        }
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
      >
        <MenuItem primaryText="Refresh" />
        <MenuItem primaryText="Help" />
        <MenuItem primaryText="Sign out" />
      </IconMenu>
    }
  />
);

// "http://www.material-ui.com/#/components/auto-complete"
export class AutoCompleteExampleSimple extends React.Component<{}, {dataSource: string[]}> {
  constructor(props) {
    super(props);

    this.state = {
      dataSource: [],
    };
  }

  handleUpdateInput = (value) => {
    this.setState({
      dataSource: [
        value,
        value + value,
        value + value + value,
      ],
    });
  }

  dataSourceConfig = {
    text: 'textKey',
    value: 'valueKey',
  };

  render() {
    return (
      <div>
        <AutoComplete
          hintText="Type anything"
          dataSource={this.state.dataSource}
          onUpdateInput={this.handleUpdateInput}
        />
        <AutoComplete
          hintText="Type anything"
          dataSource={this.state.dataSource}
          onUpdateInput={this.handleUpdateInput}
          floatingLabelText="Full width"
          fullWidth={true}
                    popoverProps={{
            animated: true
          }}
        />
        <AutoComplete
          hintText="Type anything"
          dataSource={[
            {
              textKey: 'hello',
              valueKey: 'world',
            },
          ]}
          dataSourceConfig={this.dataSourceConfig}
          onUpdateInput={this.handleUpdateInput}
        />
      </div>
    );
  }
}

const dataSource1 = [
  {
    text: 'text-value1',
    value: (
      <MenuItem
        primaryText="text-value1"
        secondaryText="&#9786;"
      />
    ),
  },
  {
    text: 'text-value2',
    value: (
      <MenuItem
        primaryText="text-value2"
        secondaryText="&#9786;"
      />
    ),
  },
];

const dataSource2 = ['12345', '23456', '34567'];

const dataSource3 = [
  {text: 'Some Text', value: 'someFirstValue'},
  {text: 'Some Text', value: 'someSecondValue'},
];

const AutoCompleteExampleNoFilter = () => (
  <div>
    <AutoComplete
      hintText="text-value data"
      filter={AutoComplete.noFilter}
      dataSource={dataSource1}
    /><br />
    <AutoComplete
      floatingLabelText="showAllItems"
      filter={AutoComplete.noFilter}
      openOnFocus={true}
      dataSource={dataSource2}
    /><br />
    <AutoComplete
      floatingLabelText="Same text, different values"
      filter={AutoComplete.noFilter}
      openOnFocus={true}
      dataSource={dataSource3}
    />
  </div>
);

const colors = [
  'Red',
  'Orange',
  'Yellow',
  'Green',
  'Blue',
  'Purple',
  'Black',
  'White',
];

const fruit = [
  'Apple', 'Apricot', 'Avocado',
  'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry',
  'Boysenberry', 'Blood Orange',
  'Cantaloupe', 'Currant', 'Cherry', 'Cherimoya', 'Cloudberry',
  'Coconut', 'Cranberry', 'Clementine',
  'Damson', 'Date', 'Dragonfruit', 'Durian',
  'Elderberry',
  'Feijoa', 'Fig',
  'Goji berry', 'Gooseberry', 'Grape', 'Grapefruit', 'Guava',
  'Honeydew', 'Huckleberry',
  'Jabouticaba', 'Jackfruit', 'Jambul', 'Jujube', 'Juniper berry',
  'Kiwi fruit', 'Kumquat',
  'Lemon', 'Lime', 'Loquat', 'Lychee',
  'Nectarine',
  'Mango', 'Marion berry', 'Melon', 'Miracle fruit', 'Mulberry', 'Mandarine',
  'Olive', 'Orange',
  'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Physalis', 'Plum', 'Pineapple',
  'Pumpkin', 'Pomegranate', 'Pomelo', 'Purple Mangosteen',
  'Quince',
  'Raspberry', 'Raisin', 'Rambutan', 'Redcurrant',
  'Salal berry', 'Satsuma', 'Star fruit', 'Strawberry', 'Squash', 'Salmonberry',
  'Tamarillo', 'Tamarind', 'Tomato', 'Tangerine',
  'Ugli fruit',
  'Watermelon',
];

const AutoCompleteExampleFilters = () => (
  <div>
    <AutoComplete
      floatingLabelText="Type 'r', case insensitive"
      filter={AutoComplete.caseInsensitiveFilter}
      dataSource={colors}
    />
    <br />
    <AutoComplete
      floatingLabelText="Type 'peah', fuzzy search"
      filter={AutoComplete.fuzzyFilter}
      dataSource={fruit}
      maxSearchResults={5}
    />
  </div>
);

// "http://www.material-ui.com/#/components/avatar"
const AvatarExampleSimple = () => (
  <List>
    <ListItem
      disabled={true}
      leftAvatar={
        <Avatar src="images/uxceo-128.jpg" />
      }
    >
      Image Avatar
    </ListItem>
    <ListItem
      disabled={true}
      leftAvatar={
        <Avatar
          src="images/uxceo-128.jpg"
          size={30}
          style={style}
        />
      }
    >
      Image Avatar with custom size
    </ListItem>
    <ListItem
      disabled={true}
      leftAvatar={
        <Avatar icon={<FontIcon className="muidocs-icon-communication-voicemail" />} />
      }
    >
      FontIcon Avatar
    </ListItem>
    <ListItem
      disabled={true}
      leftAvatar={
        <Avatar
          icon={<FontIcon className="muidocs-icon-communication-voicemail" />}
          color={blue300}
          backgroundColor={indigo900}
          size={30}
          style={style}
        />
      }
    >
      FontIcon Avatar with custom colors and size
    </ListItem>
    <ListItem
      disabled={true}
      leftAvatar={
        <Avatar icon={<FileFolder />} />
      }
    >
      SvgIcon Avatar
    </ListItem>
    <ListItem
      disabled={true}
      leftAvatar={
        <Avatar
          icon={<FileFolder />}
          color={orange200}
          backgroundColor={pink400}
          size={30}
          style={style}
        />
      }
    >
      SvgIcon Avatar with custom colors and size
    </ListItem>
    <ListItem
      disabled={true}
      leftAvatar={<Avatar>A</Avatar>}
    >
      Letter Avatar
    </ListItem>
    <ListItem
      disabled={true}
      leftAvatar={
        <Avatar
          color={deepOrange300}
          backgroundColor={purple500}
          size={30}
          style={style}
        >
          A
        </Avatar>
      }
    >
      Letter Avatar with custom colors and size
    </ListItem>
  </List>
);

// "http://www.material-ui.com/#/components/badge"
const BadgeExampleSimple = () => (
  <div>
    <Badge
      badgeContent={4}
      primary={true}
    >
      <SocialNotifications />
    </Badge>
    <Badge
      badgeContent={10}
      secondary={true}
      badgeStyle={{top: 12, right: 12}}
    >
      <IconButton tooltip="Notifications">
        <SocialNotifications />
      </IconButton>
    </Badge>
  </div>
);

const BadgeExampleContent = () => (
  <div>
    <Badge
      badgeContent={<IconButton tooltip="Backup"><FileCloudUpload /></IconButton>}
    >
      <FileFolderOpen />
    </Badge>
    <Badge
      badgeContent="&copy;"
      badgeStyle={{fontSize: 20}}
    >
      Company Name
    </Badge>
  </div>
);

// "http://www.material-ui.com/#/components/flat-button"
const FlatButtonExampleSimple = () => (
  <div>
        <FlatButton label="Default"/>
        <FlatButton label="Primary" primary={true}/>
        <FlatButton label="Secondary" secondary={true}/>
        <FlatButton label="Disabled" disabled={true}/>
  </div>
);

const FlatButtonExampleComplex = () => (
  <div>
    <FlatButton label="Choose an Image" labelPosition="before">
            <input type="file" style={styles.exampleImageInput}/>
    </FlatButton>

    <FlatButton
      label={<span>Label before</span>}
      labelPosition="before"
      primary={true}
      style={styles.button}
      icon={<ActionAndroid />}
    />

    <FlatButton
      label="GitHub Link"
      href="https://github.com/callemall/material-ui"
      secondary={true}
      icon={<FontIcon className="muidocs-icon-custom-github" />}
    />

  </div>
);

const FlatButtonExampleIcon = () => (
  <div>
    <FlatButton
      icon={<ActionAndroid />}
      style={style}
    />
    <FlatButton
      backgroundColor="#a4c639"
      hoverColor="#8AA62F"
      icon={<ActionAndroid color={fullWhite} />}
      style={style}
    />
    <FlatButton
      href="https://github.com/callemall/material-ui"
      secondary={true}
      icon={<FontIcon className="muidocs-icon-custom-github" />}
      style={style}
    />
  </div>
);

// "http://www.material-ui.com/#/components/raised-button"
const RaisedButtonExampleSimple = () => (
  <div>
        <RaisedButton label="Default" style={style}/>
        <RaisedButton label="Primary" primary={true} style={style}/>
        <RaisedButton label="Secondary" secondary={true} style={style}/>
        <RaisedButton label="Disabled" disabled={true} style={style}/>
  </div>
);

const RaisedButtonExampleComplex = () => (
  <div>
    <RaisedButton
      label="Choose an Image"
      labelPosition="before"
      style={styles.button}
    >
            <input type="file" style={styles.exampleImageInput}/>
    </RaisedButton>
    <RaisedButton
            buttonStyle={styles.button}
      label={<span>Label before</span>}
      labelPosition="before"
      primary={true}
      icon={<ActionAndroid />}
    />
    <RaisedButton
      label="Github Link"
      href="https://github.com/callemall/material-ui"
      secondary={true}
      style={styles.button}
      icon={<FontIcon className="muidocs-icon-custom-github" />}
    />
  </div>
);

const RaisedButtonExampleIcon = () => (
  <div>
    <RaisedButton
      icon={<ActionAndroid />}
      style={style}
    />
    <RaisedButton
      backgroundColor="#a4c639"
      icon={<ActionAndroid color={fullWhite} />}
      style={style}
    />
    <RaisedButton
      href="https://github.com/callemall/material-ui"
      secondary={true}
      icon={<FontIcon className="muidocs-icon-custom-github" />}
      style={style}
    />
  </div>
);

// "http://www.material-ui.com/#/components/floating-action-button"
const FloatingActionButtonExampleSimple = () => (
  <div>
    <FloatingActionButton style={style}>
      <ContentAdd />
    </FloatingActionButton>

    <FloatingActionButton mini={true} style={style}>
      <ContentAdd />
    </FloatingActionButton>

    <FloatingActionButton secondary={true} style={style}>
      <ContentAdd />
    </FloatingActionButton>

    <FloatingActionButton mini={true} secondary={true} style={style}>
      <ContentAdd />
    </FloatingActionButton>

    <FloatingActionButton disabled={true} style={style}>
      <ContentAdd />
    </FloatingActionButton>

    <FloatingActionButton mini={true} disabled={true} style={style}>
      <ContentAdd />
    </FloatingActionButton>
  </div>
);

// "http://www.material-ui.com/#/components/icon-button"
const IconButtonExampleSimple = () => (
  <div>
        <IconButton iconClassName="muidocs-icon-custom-github"/>
        <IconButton iconClassName="muidocs-icon-custom-github" disabled={true}/>
  </div>
);

const IconButtonExampleComplex = () => (
  <div>
    <IconButton tooltip="Font Icon">
            <FontIcon className="muidocs-icon-action-home"/>
    </IconButton>

    <IconButton tooltip="SVG Icon">
      <ActionHome />
    </IconButton>

    <IconButton
      iconClassName="material-icons"
      tooltip="Ligature"
    >
      home
    </IconButton>
  </div>
);

const IconButtonExampleSize = () => (
  <div>
    <IconButton>
      <ActionHome />
    </IconButton>

    <IconButton
      iconStyle={styles.smallIcon}
      style={styles.small}
    >
      <ActionHome />
    </IconButton>

    <IconButton
      iconStyle={styles.mediumIcon}
      style={styles.medium}
    >
      <ActionHome />
    </IconButton>

    <IconButton
      iconStyle={styles.largeIcon}
      style={styles.large}
    >
      <ActionHome />
    </IconButton>
  </div>
);

const IconButtonExampleTooltip = () => (
  <div>
    <IconButton
      iconClassName="muidocs-icon-custom-github" tooltip="bottom-right"
      tooltipPosition="bottom-right"
    />
    <IconButton
      iconClassName="muidocs-icon-custom-github" tooltip="bottom-center"
      tooltipPosition="bottom-center"
    />
    <IconButton
      iconClassName="muidocs-icon-custom-github" tooltip="bottom-left"
      tooltipPosition="bottom-left"
    />
    <IconButton
      iconClassName="muidocs-icon-custom-github" tooltip="top-right"
      tooltipPosition="top-right"
    />
    <IconButton
      iconClassName="muidocs-icon-custom-github" tooltip="top-center"
      tooltipPosition="top-center"
    />
    <IconButton
      iconClassName="muidocs-icon-custom-github" tooltip="top-left"
      tooltipPosition="top-left"
    />
  </div>
);

const IconButtonExampleTouch = () => (
  <div>
    <IconButton tooltip="bottom-right" touch={true} tooltipPosition="bottom-right">
      <ActionGrade />
    </IconButton>
    <IconButton tooltip="bottom-center" touch={true} tooltipPosition="bottom-center">
      <ActionGrade />
    </IconButton>
    <IconButton tooltip="bottom-left" touch={true} tooltipPosition="bottom-left">
      <ActionGrade />
    </IconButton>
    <IconButton tooltip="top-right" touch={true} tooltipPosition="top-right">
      <ActionGrade />
    </IconButton>
    <IconButton tooltip="top-center" touch={true} tooltipPosition="top-center">
      <ActionGrade />
    </IconButton>
    <IconButton tooltip="top-left" touch={true} tooltipPosition="top-left">
      <ActionGrade />
    </IconButton>
  </div>
);

// "http://www.material-ui.com/#/components/card"
const CardExampleWithAvatar = () => (
  <Card>
    <CardHeader
      title="URL Avatar"
      subtitle="Subtitle"
      avatar="http://lorempixel.com/100/100/nature/"
    />
    <CardMedia
      overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
    >
            <img src="http://lorempixel.com/600/337/nature/"/>
    </CardMedia>
        <CardTitle title="Card title" subtitle="Card subtitle"/>
    <CardText>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
    </CardText>
    <CardActions>
            <FlatButton label="Action1"/>
            <FlatButton label="Action2"/>
    </CardActions>
  </Card>
);

const CardExampleWithoutAvatar = () => (
  <Card>
    <CardHeader
      title="Without Avatar"
      subtitle="Subtitle"
      actAsExpander={true}
      showExpandableButton={true}
    />
    <CardText expandable={true}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
    </CardText>
    <CardActions expandable={true}>
            <FlatButton label="Action1"/>
            <FlatButton label="Action2"/>
    </CardActions>
  </Card>
);

class CardExampleControlled extends React.Component<{}, {expanded: boolean}> {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
  }

  handleExpandChange = (expanded) => {
    this.setState({expanded});
  }

  handleToggle = (event, toggle) => {
    this.setState({expanded: toggle});
  }

  handleExpand = () => {
    this.setState({expanded: true});
  }

  handleReduce = () => {
    this.setState({expanded: false});
  }

  render() {
    return (
      <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
        <CardHeader
          title="URL Avatar"
          subtitle="Subtitle"
          avatar="http://lorempixel.com/100/100/nature/"
          actAsExpander={true}
          showExpandableButton={true}
        />
        <CardText>
          <Toggle
            toggled={this.state.expanded}
            onToggle={this.handleToggle}
            labelPosition="right"
            label="This toggle controls the expanded state of the component."
          />
        </CardText>
        <CardMedia
          expandable={true}
          overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
        >
                    <img src="http://lorempixel.com/600/337/nature/"/>
        </CardMedia>
                <CardTitle title="Card title" subtitle="Card subtitle" expandable={true}/>
        <CardText expandable={true}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
          Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
          Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
        </CardText>
        <CardActions>
                    <FlatButton label="Expand" onTouchTap={this.handleExpand}/>
                    <FlatButton label="Reduce" onTouchTap={this.handleReduce}/>
        </CardActions>
      </Card>
    );
  }
}

// "http://www.material-ui.com/#/components/chip"
const ChipExampleSimple = () => (
  <div>
    <Chip>Basic Chip</Chip>
    <Chip backgroundColor={blue300}>Blue Background</Chip>
    <Chip labelColor={blue500}>Blue Label Color</Chip>
    <Chip><Avatar size={32} color={blue300} backgroundColor={indigo900}>UI</Avatar> Avatar</Chip>
    <Chip style={styles.chip}>Styled</Chip>
  </div>
);

class ChipExampleComplex extends React.Component {
  handleRequestDelete = () => {
    alert('You clicked the delete button.');
  }

  handleTouchTap = () => {
    alert('You clicked the Chip.');
  }

  render() {
    return (
      <div>
        <Chip onTouchTap={this.handleTouchTap} onRequestDelete={this.handleRequestDelete}>Click Me</Chip>
      </div>
    );
  }
}

// "http://www.material-ui.com/#/components/date-picker"
const DatePickerExampleSimple = () => (
  <div>
        <DatePicker hintText="Portrait Dialog"/>
        <DatePicker hintText="Landscape Dialog" mode="landscape"/>
        <DatePicker hintText="Dialog Disabled" disabled={true}/>
  </div>
);

const DatePickerExampleInline = () => (
  <div>
        <DatePicker hintText="Portrait Inline Dialog" container="inline"/>
        <DatePicker hintText="Landscape Inline Dialog" container="inline" mode="landscape"/>
  </div>
);

const optionsStyle = {
  maxWidth: 255,
  marginRight: 'auto',
};

interface DatePickerExampleToggleState {
  minDate?: Date;
  maxDate?: Date;
  autoOk?: boolean;
  disableYearSelection?: boolean;
}

class DatePickerExampleToggle extends React.Component<{}, DatePickerExampleToggleState> {
  constructor(props) {
    super(props);

    const minDate = new Date();
    const maxDate = new Date();
    minDate.setFullYear(minDate.getFullYear() - 1);
    minDate.setHours(0, 0, 0, 0);
    maxDate.setFullYear(maxDate.getFullYear() + 1);
    maxDate.setHours(0, 0, 0, 0);

    this.state = {
      minDate,
      maxDate,
      autoOk: false,
      disableYearSelection: false,
    };
  }

  handleChangeMinDate = (event, date) => {
    this.setState({
      minDate: date,
    });
  }

  handleChangeMaxDate = (event, date) => {
    this.setState({
      maxDate: date,
    });
  }

  handleToggle = (event, toggled) => {
    this.setState({
      [event.target.name]: toggled,
    });
  }

  render() {
    return (
      <div>
        <DatePicker
          floatingLabelText="Ranged Date Picker"
          autoOk={this.state.autoOk}
          minDate={this.state.minDate}
          maxDate={this.state.maxDate}
          disableYearSelection={this.state.disableYearSelection}
        />
        <div style={optionsStyle}>
          <DatePicker
            onChange={this.handleChangeMinDate}
            autoOk={this.state.autoOk}
            floatingLabelText="Min Date"
            defaultDate={this.state.minDate}
            disableYearSelection={this.state.disableYearSelection}
          />
          <DatePicker
            onChange={this.handleChangeMaxDate}
            autoOk={this.state.autoOk}
            floatingLabelText="Max Date"
            defaultDate={this.state.maxDate}
            disableYearSelection={this.state.disableYearSelection}
          />
          <Toggle
            name="autoOk"
            value="autoOk"
            label="Auto Ok"
            toggled={this.state.autoOk}
            onToggle={this.handleToggle}
          />
          <Toggle
            name="disableYearSelection"
            value="disableYearSelection"
            label="Disable Year Selection"
            toggled={this.state.disableYearSelection}
            onToggle={this.handleToggle}
          />
        </div>
      </div>
    );
  }
}

class DatePickerExampleControlled extends React.Component<{}, {controlledDate?: Date}> {
  constructor(props) {
    super(props);

    this.state = {
      controlledDate: null,
    };
  }

  handleChange = (event, date) => {
    this.setState({
      controlledDate: date,
    });
  }

  render() {
    return (
      <DatePicker
        hintText="Controlled Date Input"
        value={this.state.controlledDate}
        onChange={this.handleChange}
      />
    );
  }
}

function disableWeekends(date) {
  return date.getDay() === 0 || date.getDay() === 6;
}
function disableRandomDates() {
  return Math.random() > 0.7;
}
const DatePickerExampleDisableDates = () => (
  <div>
        <DatePicker hintText="Weekends Disabled" shouldDisableDate={disableWeekends}/>
        <DatePicker hintText="Random Dates Disabled" shouldDisableDate={disableRandomDates}/>
  </div>
);

const DatePickerExampleInternational = () => (
  <div>
    <DatePicker
      hintText="fr locale"
      DateTimeFormat={Intl.DateTimeFormat}
      okLabel="OK"
      cancelLabel="Annuler"
      locale="fr"
    />
    <DatePicker
      hintText="en-US locale"
      locale="en-US"
      firstDayOfWeek={0}
    />
    <DatePicker
      hintText="Custom date format"
      firstDayOfWeek={0}
      formatDate={new Intl.DateTimeFormat('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      }).format}
    />
  </div>
);

// "http://material-ui.com/#/components/dialog"
class DialogExampleSimple extends React.Component<{}, {open?: boolean}> {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  }

  handleClose = () => {
    this.setState({open: false});
  }

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleClose}
      />,
    ];

    return (
      <div>
                <RaisedButton label="Dialog" onTouchTap={this.handleOpen}/>
        <Dialog
          title="Dialog With Actions"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          The actions in this window were passed in as an array of React objects.
        </Dialog>
      </div>
    );
  }
}

class DialogExampleModal extends React.Component<{}, {open?: boolean}> {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  }

  handleClose = () => {
    this.setState({open: false});
  }

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        disabled={true}
        onTouchTap={this.handleClose}
      />,
    ];

    return (
      <div>
                <RaisedButton label="Modal Dialog" onTouchTap={this.handleOpen}/>
        <Dialog
          title="Dialog With Actions"
          actions={actions}
          modal={true}
          open={this.state.open}
        >
          Only actions can close this dialog.
        </Dialog>
      </div>
    );
  }
}

class DialogExampleCustomWidth extends React.Component<{}, {open?: boolean}> {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  }

  handleClose = () => {
    this.setState({open: false});
  }

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        onTouchTap={this.handleClose}
      />,
    ];

    return (
      <div>
                <RaisedButton label="Dialog With Custom Width" onTouchTap={this.handleOpen}/>
        <Dialog
          title="Dialog With Custom Width"
          actions={actions}
          modal={true}
          contentStyle={customContentStyle}
          open={this.state.open}
        >
          This dialog spans the entire width of the screen.
        </Dialog>
      </div>
    );
  }
}

class DialogExampleDialogDatePicker extends React.Component<{}, {open?: boolean}> {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  }

  handleClose = () => {
    this.setState({open: false});
  }

  render() {
    const actions = [
      <FlatButton
        label="Ok"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleClose}
      />,
    ];

    return (
      <div>
                <RaisedButton label="Dialog With Date Picker" onTouchTap={this.handleOpen}/>
        <Dialog
          title="Dialog With Date Picker"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          Open a Date Picker dialog from within a dialog.
                    <DatePicker hintText="Date Picker"/>
        </Dialog>
      </div>
    );
  }
}

class DialogExampleScrollable extends React.Component<{}, {open?: boolean}> {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  }

  handleClose = () => {
    this.setState({open: false});
  }

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleClose}
      />,
    ];

    const radios = [];
    for (let i = 0; i < 30; i++) {
      radios.push(
        <RadioButton
          key={i}
          value={`value${i + 1}`}
          label={`Option ${i + 1}`}
          style={styles.radioButton}
        />
      );
    }

    return (
      <div>
                <RaisedButton label="Scrollable Dialog" onTouchTap={this.handleOpen}/>
        <Dialog
          title="Scrollable Dialog"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
          autoScrollBodyContent={true}
        >
          <RadioButtonGroup name="shipSpeed" defaultSelected="not_light">
            {radios}
          </RadioButtonGroup>
        </Dialog>
      </div>
    );
  }
}

class DialogExampleAlert extends React.Component<{}, {open?: boolean}> {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  }

  handleClose = () => {
    this.setState({open: false});
  }

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Discard"
        primary={true}
        onTouchTap={this.handleClose}
      />,
    ];

    return (
      <div>
                <RaisedButton label="Alert" onTouchTap={this.handleOpen}/>
        <Dialog
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          Discard draft?
        </Dialog>
      </div>
    );
  }
}

// "http://www.material-ui.com/#/components/divider"
const DividerExampleForm = () => (
  <Paper zDepth={2}>
        <TextField hintText="First name" style={style} underlineShow={false}/>
    <Divider />
        <TextField hintText="Middle name" style={style} underlineShow={false}/>
    <Divider />
        <TextField hintText="Last name" style={style} underlineShow={false}/>
    <Divider />
        <TextField hintText="Email address" style={style} underlineShow={false}/>
    <Divider />
  </Paper>
);

const DividerExampleList = () => (
  <Paper height={250}>
    <List>
            <ListItem insetChildren={true} primaryText="Janet Perkins Bennet"/>
            <ListItem insetChildren={true} primaryText="Peter Carlsson"/>
    </List>
        <Divider inset={true}/>
    <List>
            <ListItem insetChildren={true} primaryText="Aaron Bennet"/>
            <ListItem insetChildren={true} primaryText="Abbey Christensen"/>
    </List>
  </Paper>
);

const DividerExampleMenu = () => (
  <Menu desktop={true} style={style}>
        <MenuItem primaryText="Settings"/>
        <MenuItem primaryText="Help &amp; feedback"/>
    <Divider />
        <MenuItem primaryText="Sign out"/>
  </Menu>
);

// "http://www.material-ui.com/#/components/drawer"
class DrawerSimpleExample extends React.Component<{}, {open?: boolean}> {
  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  render() {
    return (
      <div>
        <RaisedButton
          label="Toggle Drawer"
          onTouchTap={this.handleToggle}
        />
        <Drawer open={this.state.open}>
          <MenuItem>Menu Item</MenuItem>
          <MenuItem>Menu Item 2</MenuItem>
        </Drawer>
      </div>
    );
  }
}

class DrawerUndockedExample extends React.Component<{}, {open?: boolean}> {
  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  render() {
    return (
      <div>
        <RaisedButton
          label="Open Drawer"
          onTouchTap={this.handleToggle}
        />
        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
          <MenuItem onTouchTap={this.handleClose}>Menu Item</MenuItem>
          <MenuItem onTouchTap={this.handleClose}>Menu Item 2</MenuItem>
        </Drawer>
      </div>
    );
  }
}

class DrawerOpenRightExample extends React.Component<{}, {open?: boolean}> {
  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  render() {
    return (
      <div>
        <RaisedButton
          label="Toggle Drawer"
          onTouchTap={this.handleToggle}
        />
                <Drawer width="20%" openSecondary={true} open={this.state.open}>
                    <AppBar title="AppBar"/>
        </Drawer>
      </div>
    );
  }
}

// "http://www.material-ui.com/#/components/grid-list"
const tilesData: Array<{img: string, title: string, author: string, featured?: boolean}> = [
  {
    img: 'images/grid-list/00-52-29-429_640.jpg',
    title: 'Breakfast',
    author: 'jill111',
    featured: true,
  },
  {
    img: 'images/grid-list/burger-827309_640.jpg',
    title: 'Tasty burger',
    author: 'pashminu',
  },
  {
    img: 'images/grid-list/camera-813814_640.jpg',
    title: 'Camera',
    author: 'Danson67',
  },
  {
    img: 'images/grid-list/morning-819362_640.jpg',
    title: 'Morning',
    author: 'fancycrave1',
  },
  {
    img: 'images/grid-list/hats-829509_640.jpg',
    title: 'Hats',
    author: 'Hans',
  },
  {
    img: 'images/grid-list/honey-823614_640.jpg',
    title: 'Honey',
    author: 'fancycravel',
  },
  {
    img: 'images/grid-list/vegetables-790022_640.jpg',
    title: 'Vegetables',
    author: 'jill111',
  },
  {
    img: 'images/grid-list/water-plant-821293_640.jpg',
    title: 'Water plant',
    author: 'BkrmadtyaKarki',
  },
];

const GridListExampleSimple = () => (
  <div style={styles.root}>
    <GridList
      cellHeight={200}
      style={styles.gridList}
    >
      <Subheader>December</Subheader>
      {tilesData.map((tile) => (
        <GridTile
          key={tile.img}
          title={tile.title}
          subtitle={<span>by <b>{tile.author}</b></span>}
          actionIcon={<IconButton><ToggleStarBorder color="white" /></IconButton>}
        >
                    <img src={tile.img}/>
        </GridTile>
      ))}
    </GridList>
  </div>
);

const GridListExampleComplex = () => (
  <div style={styles.root}>
    <GridList
      cols={2}
      cellHeight={200}
      padding={1}
      style={styles.gridList}
    >
      {tilesData.map((tile) => (
        <GridTile
          key={tile.img}
          title={tile.title}
          actionIcon={<IconButton><ToggleStarBorder color="white" /></IconButton>}
          actionPosition="left"
          titlePosition="top"
          titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
          cols={tile.featured ? 2 : 1}
          rows={tile.featured ? 2 : 1}
        >
                    <img src={tile.img}/>
        </GridTile>
      ))}
    </GridList>
  </div>
);

// "http://www.material-ui.com/#/components/font-icon"
const FontIconExampleSimple = () => (
  <div>
    <FontIcon
      className="muidocs-icon-action-home"
      style={iconStyles}
    />

    <FontIcon
      className="muidocs-icon-action-home"
      style={iconStyles}
      color={blue500}
    />

    <FontIcon
      className="muidocs-icon-action-home"
      style={iconStyles}
      color={red500}
      hoverColor={greenA200}
    />
  </div>
);

const FontIconExampleIcons = () => (
  <div>
    <FontIcon className="material-icons" style={iconStyles}>home</FontIcon>
    <FontIcon className="material-icons" style={iconStyles} color={red500}>flight_takeoff</FontIcon>
    <FontIcon className="material-icons" style={iconStyles} color={yellow500}>cloud_download</FontIcon>
    <FontIcon className="material-icons" style={iconStyles} color={blue500}>videogame_asset</FontIcon>
  </div>
);

// "http://www.material-ui.com/#/components/svg-icon"
const HomeIcon = (props) => (
  <SvgIcon {...props}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
  </SvgIcon>
);

const SvgIconExampleSimple = () => (
  <div>
        <HomeIcon style={iconStyles}/>
        <HomeIcon style={iconStyles} color={blue500}/>
        <HomeIcon style={iconStyles} color={red500} hoverColor={greenA200}/>
  </div>
);

const SvgIconExampleIcons = () => (
  <div>
        <ActionHome style={iconStyles}/>
        <ActionFlightTakeoff style={iconStyles} color={red500}/>
        <FileCloudDownload style={iconStyles} color={yellow500}/>
        <HardwareVideogameAsset style={iconStyles} color={blue500}/>
  </div>
);

// "http://material-ui.com/#/components/lists"
const ListExampleSimple = () => (
  <Paper>
    <List>
            <ListItem primaryText="Inbox" leftIcon={<ContentInbox />}/>
            <ListItem primaryText="Starred" leftIcon={<ActionGrade />}/>
            <ListItem primaryText="Sent mail" leftIcon={<ContentSend />}/>
            <ListItem primaryText="Drafts" leftIcon={<ContentDrafts />}/>
            <ListItem primaryText="Inbox" leftIcon={<ContentInbox />}/>
    </List>
    <Divider />
    <List>
            <ListItem primaryText="All mail" rightIcon={<ActionInfo />}/>
            <ListItem primaryText="Trash" rightIcon={<ActionInfo />}/>
            <ListItem primaryText="Spam" rightIcon={<ActionInfo />}/>
            <ListItem primaryText="Follow up" rightIcon={<ActionInfo />}/>
    </List>
  </Paper>
);

const ListExampleChat = () => (
  <Paper>
    <List>
      <Subheader>Recent chats</Subheader>
      <ListItem
        primaryText="Brendan Lim"
        leftAvatar={<Avatar src="images/ok-128.jpg" />}
        rightIcon={<CommunicationChatBubble />}
      />
      <ListItem
        primaryText="Eric Hoffman"
        leftAvatar={<Avatar src="images/kolage-128.jpg" />}
        rightIcon={<CommunicationChatBubble />}
      />
      <ListItem
        primaryText="Grace Ng"
        leftAvatar={<Avatar src="images/uxceo-128.jpg" />}
        rightIcon={<CommunicationChatBubble />}
      />
      <ListItem
        primaryText="Kerem Suer"
        leftAvatar={<Avatar src="images/kerem-128.jpg" />}
        rightIcon={<CommunicationChatBubble />}
      />
      <ListItem
        primaryText="Raquel Parrado"
        leftAvatar={<Avatar src="images/raquelromanp-128.jpg" />}
        rightIcon={<CommunicationChatBubble />}
      />
    </List>
    <Divider />
    <List>
      <Subheader>Previous chats</Subheader>
      <ListItem
        primaryText="Chelsea Otakan"
        leftAvatar={<Avatar src="images/chexee-128.jpg" />}
      />
      <ListItem
        primaryText="James Anderson"
        leftAvatar={<Avatar src="images/jsa-128.jpg" />}
      />
    </List>
  </Paper>
);

const ListExampleContacts = () => (
  <Paper>
    <List>
      <ListItem
        primaryText="Chelsea Otakan"
        leftIcon={<ActionGrade color={pinkA200} />}
        rightAvatar={<Avatar src="images/chexee-128.jpg" />}
      />
      <ListItem
        primaryText="Eric Hoffman"
        insetChildren={true}
        rightAvatar={<Avatar src="images/kolage-128.jpg" />}
      />
      <ListItem
        primaryText="James Anderson"
        insetChildren={true}
        rightAvatar={<Avatar src="images/jsa-128.jpg" />}
      />
      <ListItem
        primaryText="Kerem Suer"
        insetChildren={true}
        rightAvatar={<Avatar src="images/kerem-128.jpg" />}
      />
    </List>
        <Divider inset={true}/>
    <List>
      <ListItem
        primaryText="Adelle Charles"
        leftAvatar={
          <Avatar
            color={pinkA200} backgroundColor={transparent}
            style={{left: 8}}
          >
            A
          </Avatar>
        }
        rightAvatar={<Avatar src="images/adellecharles-128.jpg" />}
      />
      <ListItem
        primaryText="Adham Dannaway"
        insetChildren={true}
        rightAvatar={<Avatar src="images/adhamdannaway-128.jpg" />}
      />
      <ListItem
        primaryText="Allison Grayce"
        insetChildren={true}
        rightAvatar={<Avatar src="images/allisongrayce-128.jpg" />}
      />
      <ListItem
        primaryText="Angel Ceballos"
        insetChildren={true}
        rightAvatar={<Avatar src="images/angelceballos-128.jpg" />}
      />
    </List>
  </Paper>
);

const ListExampleFolder = () => (
  <Paper>
    <List>
      <Subheader inset={true}>Folders</Subheader>
      <ListItem
        leftAvatar={<Avatar icon={<FileFolder />} />}
        rightIcon={<ActionInfo />}
        primaryText="Photos"
        secondaryText="Jan 9, 2014"
      />
      <ListItem
        leftAvatar={<Avatar icon={<FileFolder />} />}
        rightIcon={<ActionInfo />}
        primaryText="Recipes"
        secondaryText="Jan 17, 2014"
      />
      <ListItem
        leftAvatar={<Avatar icon={<FileFolder />} />}
        rightIcon={<ActionInfo />}
        primaryText="Work"
        secondaryText="Jan 28, 2014"
      />
    </List>
        <Divider inset={true}/>
    <List>
      <Subheader inset={true}>Files</Subheader>
      <ListItem
        leftAvatar={<Avatar icon={<ActionAssignment />} backgroundColor={blue500} />}
        rightIcon={<ActionInfo />}
        primaryText="Vacation itinerary"
        secondaryText="Jan 20, 2014"
      />
      <ListItem
        leftAvatar={<Avatar icon={<EditorInsertChart />} backgroundColor={yellow600} />}
        rightIcon={<ActionInfo />}
        primaryText="Kitchen remodel"
        secondaryText="Jan 10, 2014"
      />
    </List>
  </Paper>
);

const ListExampleNested = () => (
  <Paper>
    <List>
      <Subheader>Nested List Items</Subheader>
            <ListItem primaryText="Sent mail" leftIcon={<ContentSend />}/>
            <ListItem primaryText="Drafts" leftIcon={<ContentDrafts />}/>
      <ListItem
        primaryText="Inbox"
        leftIcon={<ContentInbox />}
        initiallyOpen={true}
                open={true}
        primaryTogglesNestedList={true}
        nestedItems={[
          <ListItem
            key={1}
            primaryText="Starred"
            leftIcon={<ActionGrade />}
          />,
          <ListItem
            key={2}
            primaryText="Sent Mail"
            leftIcon={<ContentSend />}
            disabled={true}
            nestedItems={[
              <ListItem key={1} primaryText="Drafts" leftIcon={<ContentDrafts />} />,
            ]}
          />,
        ]}
      />
    </List>
  </Paper>
);

const ListExampleSettings = () => (
  <div>
    <Paper>
      <List>
        <Subheader>General</Subheader>
        <ListItem
          primaryText="Profile photo"
          secondaryText="Change your Google+ profile photo"
        />
        <ListItem
          primaryText="Show your status"
          secondaryText="Your status is visible to everyone you use with"
        />
      </List>
      <Divider />
      <List>
        <Subheader>Hangout Notifications</Subheader>
        <ListItem
          leftCheckbox={<Checkbox />}
          primaryText="Notifications"
          secondaryText="Allow notifications"
        />
        <ListItem
          leftCheckbox={<Checkbox />}
          primaryText="Sounds"
          secondaryText="Hangouts message"
        />
        <ListItem
          leftCheckbox={<Checkbox />}
          primaryText="Video sounds"
          secondaryText="Hangouts video call"
        />
      </List>
    </Paper>
    <Paper>
      <List>
        <ListItem
          primaryText="When calls and notifications arrive"
          secondaryText="Always interrupt"
        />
      </List>
      <Divider />
      <List>
        <Subheader>Priority Interruptions</Subheader>
                <ListItem primaryText="Events and reminders" rightToggle={<Toggle />}/>
                <ListItem primaryText="Calls" rightToggle={<Toggle />}/>
                <ListItem primaryText="Messages" rightToggle={<Toggle />}/>
      </List>
      <Divider />
      <List>
        <Subheader>Hangout Notifications</Subheader>
                <ListItem primaryText="Notifications" leftCheckbox={<Checkbox />}/>
                <ListItem primaryText="Sounds" leftCheckbox={<Checkbox />}/>
                <ListItem primaryText="Video sounds" leftCheckbox={<Checkbox />}/>
      </List>
    </Paper>
  </div>
);

const ListExamplePhone = () => (
  <Paper>
    <List>
      <ListItem
        leftIcon={<CommunicationCall color={indigo500} />}
        rightIcon={<CommunicationChatBubble />}
        primaryText="(650) 555 - 1234"
        secondaryText="Mobile"
      />
      <ListItem
        insetChildren={true}
        rightIcon={<CommunicationChatBubble />}
        primaryText="(323) 555 - 6789"
        secondaryText="Work"
      />
    </List>
        <Divider inset={true}/>
    <List>
      <ListItem
        leftIcon={<CommunicationEmail color={indigo500} />}
        primaryText="aliconnors@example.com"
        secondaryText="Personal"
      />
      <ListItem
        insetChildren={true}
        primaryText="ali_connors@example.com"
        secondaryText="Work"
      />
    </List>
  </Paper>
);

const iconButtonElement = (
  <IconButton
    touch={true}
    tooltip="more"
    tooltipPosition="bottom-left"
  >
        <NavigationMoreVert color={grey400}/>
  </IconButton>
);

const rightIconMenu = (
  <IconMenu iconButtonElement={iconButtonElement}>
    <MenuItem>Reply</MenuItem>
    <MenuItem>Forward</MenuItem>
    <MenuItem>Delete</MenuItem>
  </IconMenu>
);

const ListExampleMessages = () => (
  <div>
    <Paper>
      <List>
        <Subheader>Today</Subheader>
        <ListItem
          leftAvatar={<Avatar src="images/ok-128.jpg" />}
          primaryText="Brunch this weekend?"
          secondaryText={
            <p>
              <span style={{color: darkBlack}}>Brendan Lim</span> --
              I&apos;ll be in your neighborhood doing errands this weekend. Do you want to grab brunch?
            </p>
          }
          secondaryTextLines={2}
        />
                <Divider inset={true}/>
        <ListItem
          leftAvatar={<Avatar src="images/kolage-128.jpg" />}
          primaryText={
            <p>Summer BBQ&nbsp;&nbsp;<span style={{color: lightBlack}}>4</span></p>
          }
          secondaryText={
            <p>
              <span style={{color: darkBlack}}>to me, Scott, Jennifer</span> --
              Wish I could come, but I&apos;m out of town this weekend.
            </p>
          }
          secondaryTextLines={2}
        />
                <Divider inset={true}/>
        <ListItem
          leftAvatar={<Avatar src="images/uxceo-128.jpg" />}
          primaryText="Oui oui"
          secondaryText={
            <p>
              <span style={{color: darkBlack}}>Grace Ng</span> --
              Do you have Paris recommendations? Have you ever been?
            </p>
          }
          secondaryTextLines={2}
        />
                <Divider inset={true}/>
        <ListItem
          leftAvatar={<Avatar src="images/kerem-128.jpg" />}
          primaryText="Birdthday gift"
          secondaryText={
            <p>
              <span style={{color: darkBlack}}>Kerem Suer</span> --
              Do you have any ideas what we can get Heidi for her birthday? How about a pony?
            </p>
          }
          secondaryTextLines={2}
        />
                <Divider inset={true}/>
        <ListItem
          leftAvatar={<Avatar src="images/raquelromanp-128.jpg" />}
          primaryText="Recipe to try"
          secondaryText={
            <p>
              <span style={{color: darkBlack}}>Raquel Parrado</span> --
              We should eat this: grated squash. Corn and tomatillo tacos.
            </p>
          }
          secondaryTextLines={2}
        />
      </List>
    </Paper>
    <Paper>
      <List>
        <Subheader>Today</Subheader>
        <ListItem
          leftAvatar={<Avatar src="images/ok-128.jpg" />}
          rightIconButton={rightIconMenu}
          primaryText="Brendan Lim"
          secondaryText={
            <p>
              <span style={{color: darkBlack}}>Brunch this weekend?</span><br />
              I&apos;ll be in your neighborhood doing errands this weekend. Do you want to grab brunch?
            </p>
          }
          secondaryTextLines={2}
        />
                <Divider inset={true}/>
        <ListItem
          leftAvatar={<Avatar src="images/kolage-128.jpg" />}
          rightIconButton={rightIconMenu}
          primaryText="me, Scott, Jennifer"
          secondaryText={
            <p>
              <span style={{color: darkBlack}}>Summer BBQ</span><br />
              Wish I could come, but I&apos;m out of town this weekend.
            </p>
          }
          secondaryTextLines={2}
        />
                <Divider inset={true}/>
        <ListItem
          leftAvatar={<Avatar src="images/uxceo-128.jpg" />}
          rightIconButton={rightIconMenu}
          primaryText="Grace Ng"
          secondaryText={
            <p>
              <span style={{color: darkBlack}}>Oui oui</span><br />
              Do you have any Paris recs? Have you ever been?
            </p>
          }
          secondaryTextLines={2}
        />
                <Divider inset={true}/>
        <ListItem
          leftAvatar={<Avatar src="images/kerem-128.jpg" />}
          rightIconButton={rightIconMenu}
          primaryText="Kerem Suer"
          secondaryText={
            <p>
              <span style={{color: darkBlack}}>Birthday gift</span><br />
              Do you have any ideas what we can get Heidi for her birthday? How about a pony?
            </p>
          }
          secondaryTextLines={2}
        />
                <Divider inset={true}/>
        <ListItem
          leftAvatar={<Avatar src="images/raquelromanp-128.jpg" />}
          rightIconButton={rightIconMenu}
          primaryText="Raquel Parrado"
          secondaryText={
            <p>
              <span style={{color: darkBlack}}>Recipe to try</span><br />
              We should eat this: grated squash. Corn and tomatillo tacos.
            </p>
          }
          secondaryTextLines={2}
        />
      </List>
    </Paper>
  </div>
);

function wrapState(ComposedComponent: React.ComponentClass<__MaterialUI.List.SelectableProps>) {
  return class SelectableList extends Component<{defaultValue: number}, {selectedIndex: number}> {
    static propTypes = {
      children: PropTypes.node.isRequired,
      defaultValue: PropTypes.number.isRequired,
    };

    componentWillMount() {
      this.setState({
        selectedIndex: this.props.defaultValue,
      });
    }

    handleRequestChange = (event, index) => {
      this.setState({
        selectedIndex: index,
      });
    }

    render() {
      return (
        <ComposedComponent
          value={this.state.selectedIndex}
          onChange={this.handleRequestChange}
        >
          {this.props.children}
        </ComposedComponent>
      );
    }
  };
}

let SelectableList = wrapState(makeSelectable(List));

const ListExampleSelectable = () => (
  <Paper>
    <SelectableList defaultValue={3}>
      <Subheader>Selectable Contacts</Subheader>
      <ListItem
        value={1}
        primaryText="Brendan Lim"
        leftAvatar={<Avatar src="images/ok-128.jpg" />}
        nestedItems={[
          <ListItem
            value={2}
            primaryText="Grace Ng"
            leftAvatar={<Avatar src="images/uxceo-128.jpg" />}
          />,
        ]}
      />
      <ListItem
        value={3}
        primaryText="Kerem Suer"
        leftAvatar={<Avatar src="images/kerem-128.jpg" />}
      />
      <ListItem
        value={4}
        primaryText="Eric Hoffman"
        leftAvatar={<Avatar src="images/kolage-128.jpg" />}
      />
      <ListItem
        value={5}
        primaryText="Raquel Parrado"
        leftAvatar={<Avatar src="images/raquelromanp-128.jpg" />}
      />
    </SelectableList>
  </Paper>
);

// "http://www.material-ui.com/#/components/menu"
const MenuExampleSimple = () => (
  <div>
    <Paper style={style}>
      <Menu>
                <MenuItem primaryText="Maps"/>
                <MenuItem primaryText="Books"/>
                <MenuItem primaryText="Flights"/>
                <MenuItem primaryText="Apps"/>
      </Menu>
    </Paper>
    <Paper style={style}>
      <Menu>
                <MenuItem primaryText="Refresh"/>
                <MenuItem primaryText="Help &amp; feedback"/>
                <MenuItem primaryText="Settings"/>
                <MenuItem primaryText="Sign out"/>
      </Menu>
    </Paper>
  </div>
);

const MenuExampleDisable = () => (
  <div>
    <Paper style={style}>
      <Menu desktop={true}>
                <MenuItem primaryText="Back"/>
                <MenuItem primaryText="Forward" disabled={true}/>
        <Divider />
                <MenuItem primaryText="Recently closed" disabled={true}/>
                <MenuItem primaryText="Google" disabled={true}/>
                <MenuItem primaryText="YouTube"/>
      </Menu>
    </Paper>
    <Paper style={style}>
      <Menu desktop={true}>
                <MenuItem primaryText="Undo"/>
                <MenuItem primaryText="Redo" disabled={true}/>
        <Divider />
                <MenuItem primaryText="Cut" disabled={true}/>
                <MenuItem primaryText="Copy" disabled={true}/>
                <MenuItem primaryText="Paste"/>
      </Menu>
    </Paper>
  </div>
);

const MenuExampleIcons = () => (
  <div>
    <Paper style={styles.paper}>
      <Menu>
                <MenuItem primaryText="Preview" leftIcon={<ImageRemoveRedEye />}/>
                <MenuItem primaryText="Share" leftIcon={<SocialPersonAdd />}/>
                <MenuItem primaryText="Get links" leftIcon={<ContentLink />}/>
        <Divider />
                <MenuItem primaryText="Make a copy" leftIcon={<ContentContentCopy />}/>
                <MenuItem primaryText="Download" leftIcon={<FileFileDownload />}/>
        <Divider />
                <MenuItem primaryText="Remove" leftIcon={<ActionDelete />}/>
      </Menu>
    </Paper>
    <Paper style={styles.paper}>
      <Menu>
                <MenuItem primaryText="Clear Config"/>
                <MenuItem primaryText="New Config" rightIcon={<SocialPersonAdd />}/>
                <MenuItem primaryText="Project" rightIcon={<FontIcon className="material-icons">settings</FontIcon>}/>
        <MenuItem
          primaryText="Workspace"
          rightIcon={
            <FontIcon className="material-icons" style={{color: '#559'}}>settings</FontIcon>
          }
        />
                <MenuItem primaryText="Paragraph" rightIcon={<b style={styles.rightIcon}>¶</b>}/>
                <MenuItem primaryText="Section" rightIcon={<b style={styles.rightIcon}>§</b>}/>
      </Menu>
    </Paper>
  </div>
);

const MenuExampleSecondary = () => (
  <div>
    <Paper style={style}>
      <Menu desktop={true} width={256}>
                <MenuItem primaryText="Bold" secondaryText="&#8984;B"/>
                <MenuItem primaryText="Italic" secondaryText="&#8984;I"/>
                <MenuItem primaryText="Underline" secondaryText="&#8984;U"/>
                <MenuItem primaryText="Strikethrough" secondaryText="Alt+Shift+5"/>
                <MenuItem primaryText="Superscript" secondaryText="&#8984;."/>
                <MenuItem primaryText="Subscript" secondaryText="&#8984;,"/>
        <Divider />
                <MenuItem primaryText="Paragraph styles" rightIcon={<NavigationArrowDropRight />}/>
                <MenuItem primaryText="Align" rightIcon={<NavigationArrowDropRight />}/>
                <MenuItem primaryText="Line spacing" rightIcon={<NavigationArrowDropRight />}/>
                <MenuItem primaryText="Numbered list" rightIcon={<NavigationArrowDropRight />}/>
                <MenuItem primaryText="List options" rightIcon={<NavigationArrowDropRight />}/>
        <Divider />
                <MenuItem primaryText="Clear formatting" secondaryText="&#8984;/"/>
      </Menu>
    </Paper>
    <Paper style={style}>
      <Menu desktop={true} width={256}>
                <MenuItem primaryText="Open" secondaryText="Cmd + O"/>
                <MenuItem primaryText="Paste in place" secondaryText="Shift + V"/>
                <MenuItem primaryText="Research" secondaryText="Opt + Shift + Cmd + I"/>
      </Menu>
    </Paper>
    <Paper style={style}>
      <Menu desktop={true} width={256}>
                <MenuItem primaryText="Open" secondaryText="&#8984;O"/>
                <MenuItem primaryText="Paste in place" secondaryText="&#8679;&#8984;V"/>
                <MenuItem primaryText="Research" secondaryText="&#8997;&#8679;&#8984;I"/>
      </Menu>
    </Paper>
  </div>
);

const MenuExampleNested = () => (
  <div>
    <Paper style={style}>
      <Menu desktop={true} width={320}>
                <MenuItem primaryText="Single" insetChildren={true}/>
                <MenuItem primaryText="1.15" insetChildren={true}/>
                <MenuItem primaryText="Double" insetChildren={true}/>
        <MenuItem
          primaryText="Custom: 1.2"
          checked={true}
          rightIcon={<NavigationArrowDropRight />}
          menuItems={[
            <MenuItem
              primaryText="Show"
              rightIcon={<NavigationArrowDropRight />}
              menuItems={[
                <MenuItem primaryText="Show Level 2" />,
                <MenuItem primaryText="Grid lines" checked={true} />,
                <MenuItem primaryText="Page breaks" insetChildren={true} />,
                <MenuItem primaryText="Rules" checked={true} />,
              ]}
            />,
            <MenuItem primaryText="Grid lines" checked={true} />,
            <MenuItem primaryText="Page breaks" insetChildren={true} />,
            <MenuItem primaryText="Rules" checked={true} />,
          ]}
        />
        <Divider />
                <MenuItem primaryText="Add space before paragraph"/>
                <MenuItem primaryText="Add space after paragraph"/>
        <Divider />
                <MenuItem primaryText="Custom spacing..."/>
      </Menu>
    </Paper>
  </div>
);

// "http://www.material-ui.com/#/components/icon-menu"
const IconMenuExampleSimple = () => (
  <div>
    <IconMenu
      animated={true}
      iconButtonElement={<IconButton><NavigationMoreVert /></IconButton>}
      anchorOrigin={{horizontal: 'left', vertical: 'top'}}
      targetOrigin={{horizontal: 'left', vertical: 'top'}}
    >
            <MenuItem primaryText="Refresh"/>
            <MenuItem primaryText="Send feedback"/>
            <MenuItem primaryText="Settings"/>
            <MenuItem primaryText="Help"/>
            <MenuItem primaryText="Sign out"/>
    </IconMenu>
    <IconMenu
      animated={false}
      iconButtonElement={<IconButton><NavigationMoreVert /></IconButton>}
      anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
      targetOrigin={{horizontal: 'left', vertical: 'bottom'}}
    >
            <MenuItem primaryText="Refresh"/>
            <MenuItem primaryText="Send feedback"/>
            <MenuItem primaryText="Settings"/>
            <MenuItem primaryText="Help"/>
            <MenuItem primaryText="Sign out"/>
    </IconMenu>
    <IconMenu
      iconButtonElement={<IconButton><NavigationMoreVert /></IconButton>}
      anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
      targetOrigin={{horizontal: 'right', vertical: 'bottom'}}
    >
            <MenuItem primaryText="Refresh"/>
            <MenuItem primaryText="Send feedback"/>
            <MenuItem primaryText="Settings"/>
            <MenuItem primaryText="Help"/>
            <MenuItem primaryText="Sign out"/>
    </IconMenu>
    <IconMenu
      iconButtonElement={<IconButton><NavigationMoreVert /></IconButton>}
      anchorOrigin={{horizontal: 'right', vertical: 'top'}}
      targetOrigin={{horizontal: 'right', vertical: 'top'}}
    >
            <MenuItem primaryText="Refresh"/>
            <MenuItem primaryText="Send feedback"/>
            <MenuItem primaryText="Settings"/>
            <MenuItem primaryText="Help"/>
            <MenuItem primaryText="Sign out"/>
    </IconMenu>
  </div>
);

interface IconMenuExampleControlledState {
  valueSingle?: string;
  valueMultiple?: string[];
  openMenu?: boolean;
}

class IconMenuExampleControlled extends React.Component<{}, IconMenuExampleControlledState> {
  constructor(props) {
    super(props);

    this.state = {
      valueSingle: '3',
      valueMultiple: ['3', '5'],
    };
  }

  handleChangeSingle = (event, value) => {
    this.setState({
      valueSingle: value,
    });
  }

  handleChangeMultiple = (event, value) => {
    this.setState({
      valueMultiple: value,
    });
  }

  handleOpenMenu = () => {
    this.setState({
      openMenu: true,
    });
  }

  handleOnRequestChange = (value) => {
    this.setState({
      openMenu: value,
    });
  }

  render() {
    return (
      <div>
        <IconMenu
          iconButtonElement={<IconButton><NavigationMoreVert /></IconButton>}
          onChange={this.handleChangeSingle}
          value={this.state.valueSingle}
        >
                    <MenuItem value="1" primaryText="Refresh"/>
                    <MenuItem value="2" primaryText="Send feedback"/>
                    <MenuItem value="3" primaryText="Settings"/>
                    <MenuItem value="4" primaryText="Help"/>
                    <MenuItem value="5" primaryText="Sign out"/>
        </IconMenu>
        <IconMenu
          iconButtonElement={<IconButton><ContentFilterList /></IconButton>}
          onChange={this.handleChangeMultiple}
          value={this.state.valueMultiple}
          multiple={true}
        >
                    <MenuItem value="1" primaryText="Blu-ray"/>
                    <MenuItem value="2" primaryText="Cassette"/>
                    <MenuItem value="3" primaryText="CD"/>
                    <MenuItem value="4" primaryText="DVD Audio"/>
                    <MenuItem value="5" primaryText="Hybrid SACD"/>
                    <MenuItem value="6" primaryText="Vinyl"/>
        </IconMenu>
        <IconMenu
          iconButtonElement={<IconButton><FileFileDownload /></IconButton>}
          open={this.state.openMenu}
          onRequestChange={this.handleOnRequestChange}
        >
                    <MenuItem value="1" primaryText="Windows App"/>
                    <MenuItem value="2" primaryText="Mac App"/>
                    <MenuItem value="3" primaryText="Android App"/>
                    <MenuItem value="4" primaryText="iOS App"/>
        </IconMenu>
                <RaisedButton onTouchTap={this.handleOpenMenu} label="Downloads"/>
      </div>
    );
  }
}

const IconMenuExampleScrollable = () => (
  <IconMenu
    iconButtonElement={<IconButton><MapsPlace /></IconButton>}
    anchorOrigin={{horizontal: 'left', vertical: 'top'}}
    targetOrigin={{horizontal: 'left', vertical: 'top'}}
    maxHeight={272}
  >
        <MenuItem value="AL" primaryText="Alabama"/>
        <MenuItem value="AK" primaryText="Alaska"/>
        <MenuItem value="AZ" primaryText="Arizona"/>
        <MenuItem value="AR" primaryText="Arkansas"/>
        <MenuItem value="CA" primaryText="California"/>
        <MenuItem value="CO" primaryText="Colorado"/>
        <MenuItem value="CT" primaryText="Connecticut"/>
        <MenuItem value="DE" primaryText="Delaware"/>
        <MenuItem value="DC" primaryText="District Of Columbia"/>
        <MenuItem value="FL" primaryText="Florida"/>
        <MenuItem value="GA" primaryText="Georgia"/>
        <MenuItem value="HI" primaryText="Hawaii"/>
        <MenuItem value="ID" primaryText="Idaho"/>
        <MenuItem value="IL" primaryText="Illinois"/>
        <MenuItem value="IN" primaryText="Indiana"/>
        <MenuItem value="IA" primaryText="Iowa"/>
        <MenuItem value="KS" primaryText="Kansas"/>
        <MenuItem value="KY" primaryText="Kentucky"/>
        <MenuItem value="LA" primaryText="Louisiana"/>
        <MenuItem value="ME" primaryText="Maine"/>
        <MenuItem value="MD" primaryText="Maryland"/>
        <MenuItem value="MA" primaryText="Massachusetts"/>
        <MenuItem value="MI" primaryText="Michigan"/>
        <MenuItem value="MN" primaryText="Minnesota"/>
        <MenuItem value="MS" primaryText="Mississippi"/>
        <MenuItem value="MO" primaryText="Missouri"/>
        <MenuItem value="MT" primaryText="Montana"/>
        <MenuItem value="NE" primaryText="Nebraska"/>
        <MenuItem value="NV" primaryText="Nevada"/>
        <MenuItem value="NH" primaryText="New Hampshire"/>
        <MenuItem value="NJ" primaryText="New Jersey"/>
        <MenuItem value="NM" primaryText="New Mexico"/>
        <MenuItem value="NY" primaryText="New York"/>
        <MenuItem value="NC" primaryText="North Carolina"/>
        <MenuItem value="ND" primaryText="North Dakota"/>
        <MenuItem value="OH" primaryText="Ohio"/>
        <MenuItem value="OK" primaryText="Oklahoma"/>
        <MenuItem value="OR" primaryText="Oregon"/>
        <MenuItem value="PA" primaryText="Pennsylvania"/>
        <MenuItem value="RI" primaryText="Rhode Island"/>
        <MenuItem value="SC" primaryText="South Carolina"/>
        <MenuItem value="SD" primaryText="South Dakota"/>
        <MenuItem value="TN" primaryText="Tennessee"/>
        <MenuItem value="TX" primaryText="Texas"/>
        <MenuItem value="UT" primaryText="Utah"/>
        <MenuItem value="VT" primaryText="Vermont"/>
        <MenuItem value="VA" primaryText="Virginia"/>
        <MenuItem value="WA" primaryText="Washington"/>
        <MenuItem value="WV" primaryText="West Virginia"/>
        <MenuItem value="WI" primaryText="Wisconsin"/>
        <MenuItem value="WY" primaryText="Wyoming"/>
  </IconMenu>
);

const IconMenuExampleNested = () => (
  <div>
    <IconMenu
      iconButtonElement={<IconButton><NavigationMoreVert /></IconButton>}
      anchorOrigin={{horizontal: 'left', vertical: 'top'}}
      targetOrigin={{horizontal: 'left', vertical: 'top'}}
    >
      <MenuItem
        primaryText="Copy &amp; Paste"
        rightIcon={<NavigationArrowDropRight />}
        menuItems={[
          <MenuItem primaryText="Cut" />,
          <MenuItem primaryText="Copy" />,
          <Divider />,
          <MenuItem primaryText="Paste" />,
        ]}
      />

      <MenuItem
        primaryText="Case Tools"
        rightIcon={<NavigationArrowDropRight />}
        menuItems={[
          <MenuItem primaryText="UPPERCASE" />,
          <MenuItem primaryText="lowercase" />,
          <MenuItem primaryText="CamelCase" />,
          <MenuItem primaryText="Propercase" />,
        ]}
      />
      <Divider />
            <MenuItem primaryText="Download" leftIcon={<FileFileDownload />}/>
      <Divider />
            <MenuItem value="Del" primaryText="Delete"/>

    </IconMenu>
  </div>
);

// "http://www.material-ui.com/#/components/dropdown-menu"
class DropDownMenuSimpleExample extends React.Component<{}, {value?: number}> {
  constructor(props) {
    super(props);
    this.state = {value: 1};
  }

  handleChange = (event, index, value) => this.setState({value});

  render() {
    return (
      <div>
        <DropDownMenu animated={false} value={this.state.value} onChange={this.handleChange}>
                    <MenuItem value={1} primaryText="Never"/>
                    <MenuItem value={2} primaryText="Every Night"/>
                    <MenuItem value={3} primaryText="Weeknights"/>
                    <MenuItem value={4} primaryText="Weekends"/>
                    <MenuItem value={5} primaryText="Weekly"/>
        </DropDownMenu>
        <br />
        <DropDownMenu
          animated={true}
          value={this.state.value}
          onChange={this.handleChange}
          style={styles.customWidth}
          autoWidth={false}
        >
                    <MenuItem value={1} primaryText="Custom width"/>
                    <MenuItem value={2} primaryText="Every Night"/>
                    <MenuItem value={3} primaryText="Weeknights"/>
                    <MenuItem value={4} primaryText="Weekends"/>
                    <MenuItem value={5} primaryText="Weekly"/>
        </DropDownMenu>
      </div>
    );
  }
}

class DropDownMenuOpenImmediateExample extends React.Component<{}, {value?: number}> {
  constructor(props) {
    super(props);
    this.state = {value: 2};
  }

  handleChange = (event, index, value) => this.setState({value});

  render() {
    return (
      <DropDownMenu value={this.state.value} onChange={this.handleChange} openImmediately={true}>
                <MenuItem value={1} primaryText="Never"/>
                <MenuItem value={2} primaryText="Every Night"/>
                <MenuItem value={3} primaryText="Weeknights"/>
                <MenuItem value={4} primaryText="Weekends"/>
                <MenuItem value={5} primaryText="Weekly"/>
      </DropDownMenu>
    );
  }
}

const DropDownMenuAnchorExample: React.SFC<{}> = () => (
  <DropDownMenu
    value={1}
    targetOrigin={{ horizontal: 'middle', vertical: 'top' }}
    anchorOrigin={{ horizontal: 'middle', vertical: 'top' }}
  >
    <MenuItem value={1} primaryText="First" />
    <MenuItem value={2} primaryText="Second" />
  </DropDownMenu>
);

const items: Array<React.ReactElement<__MaterialUI.Menus.MenuItemProps>> = [];
for (let i = 0; i < 100; i++) {
    items.push(<MenuItem value={i} key={i} primaryText={`Item ${i}`}/>);
}

class DropDownMenuLongMenuExample extends React.Component<{}, {value?: number}> {
  constructor(props) {
    super(props);
    this.state = {value: 10};
  }

  handleChange = (event, index, value) => this.setState({value});

  render() {
    return (
      <DropDownMenu maxHeight={300} value={this.state.value} onChange={this.handleChange}>
        {items}
      </DropDownMenu>
    );
  }
}

class DropDownMenuLabeledExample extends React.Component<{}, {value?: number}> {
  constructor(props) {
    super(props);
    this.state = {value: 2};
  }

  handleChange = (event, index, value) => this.setState({value});

  render() {
    return (
      <DropDownMenu value={this.state.value} onChange={this.handleChange}>
                <MenuItem value={1} label="5 am - 12 pm" primaryText="Morning"/>
                <MenuItem value={2} label="12 pm - 5 pm" primaryText="Afternoon"/>
                <MenuItem value={3} label="5 pm - 9 pm" primaryText="Evening"/>
                <MenuItem value={4} label="9 pm - 5 am" primaryText="Night"/>
      </DropDownMenu>
    );
  }
}

// "http://material-ui.com/#/components/paper"
const PaperExampleSimple = () => (
  <div>
        <Paper style={style} zDepth={1}/>
        <Paper style={style} zDepth={2}/>
        <Paper style={style} zDepth={3}/>
        <Paper style={style} zDepth={4}/>
        <Paper style={style} zDepth={5}/>
  </div>
);

const PaperExampleRounded = () => (
  <div>
        <Paper style={style} zDepth={1} rounded={false}/>
        <Paper style={style} zDepth={2} rounded={false}/>
        <Paper style={style} zDepth={3} rounded={false}/>
        <Paper style={style} zDepth={4} rounded={false}/>
        <Paper style={style} zDepth={5} rounded={false}/>
  </div>
);

const PaperExampleCircle = () => (
  <div>
        <Paper style={style} zDepth={1} circle={true}/>
        <Paper style={style} zDepth={2} circle={true}/>
        <Paper style={style} zDepth={3} circle={true}/>
        <Paper style={style} zDepth={4} circle={true}/>
        <Paper style={style} zDepth={5} circle={true}/>
  </div>
);

// "http://www.material-ui.com/#/components/popover"
class PopoverExampleSimple extends React.Component<{}, {open?: boolean, anchorEl?: React.ReactInstance}> {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };
  }

  handleTouchTap = (event) => {
    // This prevents ghost click.
    event.preventDefault();

    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  }

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  }

  render() {
    return (
      <div>
        <RaisedButton
          onTouchTap={this.handleTouchTap}
          label="Click me"
        />
        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
          onRequestClose={this.handleRequestClose}
        >
          <Menu>
                        <MenuItem primaryText="Refresh"/>
                        <MenuItem primaryText="Help &amp; feedback"/>
                        <MenuItem primaryText="Settings"/>
                        <MenuItem primaryText="Sign out"/>
          </Menu>
        </Popover>
      </div>
    );
  }
}

class PopoverExampleAnimation extends React.Component<{}, {open?: boolean, anchorEl?: React.ReactInstance}> {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };
  }

  handleTouchTap = (event) => {
    // This prevents ghost click.
    event.preventDefault();
    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  }

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  }

  render() {
    return (
      <div>
        <RaisedButton
          onTouchTap={this.handleTouchTap}
          label="Click me"
        />
        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
          onRequestClose={this.handleRequestClose}
          animation={PopoverAnimationVertical}
        >
          <Menu>
                        <MenuItem primaryText="Refresh"/>
                        <MenuItem primaryText="Help &amp; feedback"/>
                        <MenuItem primaryText="Settings"/>
                        <MenuItem primaryText="Sign out"/>
          </Menu>
        </Popover>
      </div>
    );
  }
}

interface PopoverExampleConfigurableState {
  open?: boolean;
  anchorOrigin?: __MaterialUI.propTypes.origin;
  targetOrigin?: __MaterialUI.propTypes.origin;
  anchorEl?: React.ReactInstance;
}

class PopoverExampleConfigurable extends React.Component<{}, PopoverExampleConfigurableState> {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      anchorOrigin: {
        horizontal: 'left',
        vertical: 'bottom',
      },
      targetOrigin: {
        horizontal: 'left',
        vertical: 'top',
      },
    };
  }

  handleTouchTap = (event) => {
    // This prevents ghost click.
    event.preventDefault();
    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  }

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  }

  setAnchor = (positionElement, position) => {
    const {anchorOrigin} = this.state;
    anchorOrigin[positionElement] = position;

    this.setState({
      anchorOrigin
    });
  }

  setTarget = (positionElement, position) => {
    const {targetOrigin} = this.state;
    targetOrigin[positionElement] = position;

    this.setState({
      targetOrigin
    });
  }

  render() {
    return (
      <div>
        <RaisedButton
          onTouchTap={this.handleTouchTap}
          label="Click me"
        />
        <h3 style={styles.h3}>Current Settings</h3>
        <pre>
          anchorOrigin: {JSON.stringify(this.state.anchorOrigin)}
          <br />
          targetOrigin: {JSON.stringify(this.state.targetOrigin)}
        </pre>
        <h3 style={styles.h3}>Position Options</h3>
        <p>Use the settings below to toggle the positioning of the popovers above</p>
        <h3 style={styles.h3}>Anchor Origin</h3>
        <div style={styles.block}>
          <div style={styles.block2}>
            <span>Vertical</span>
            <RadioButton
              onClick={this.setAnchor.bind(this, 'vertical', 'top')}
              label="Top" checked={this.state.anchorOrigin.vertical === 'top'}
            />
            <RadioButton
              onClick={this.setAnchor.bind(this, 'vertical', 'center')}
              label="Center" checked={this.state.anchorOrigin.vertical === 'center'}
            />
            <RadioButton
              onClick={this.setAnchor.bind(this, 'vertical', 'bottom')}
              label="Bottom" checked={this.state.anchorOrigin.vertical === 'bottom'}
            />
          </div>
          <div style={styles.block2}>
            <span>Horizontal</span>
            <RadioButton
              onClick={this.setAnchor.bind(this, 'horizontal', 'left')}
              label="Left" checked={this.state.anchorOrigin.horizontal === 'left'}
            />
            <RadioButton
              onClick={this.setAnchor.bind(this, 'horizontal', 'middle')}
              label="Middle" checked={this.state.anchorOrigin.horizontal === 'middle'}
            />
            <RadioButton
              onClick={this.setAnchor.bind(this, 'horizontal', 'right')}
              label="Right" checked={this.state.anchorOrigin.horizontal === 'right'}
            />
          </div>
        </div>
        <h3 style={styles.h3}>Target Origin</h3>
        <div style={styles.block}>
          <div style={styles.block2}>
            <span>Vertical</span>
            <RadioButton
              onClick={this.setTarget.bind(this, 'vertical', 'top')}
              label="Top" checked={this.state.targetOrigin.vertical === 'top'}
            />
            <RadioButton
              onClick={this.setTarget.bind(this, 'vertical', 'center')}
              label="Center" checked={this.state.targetOrigin.vertical === 'center'}
            />
            <RadioButton
              onClick={this.setTarget.bind(this, 'vertical', 'bottom')}
              label="Bottom" checked={this.state.targetOrigin.vertical === 'bottom'}
            />
          </div>
          <div style={styles.block2}>
            <span>Horizontal</span>
            <RadioButton
              onClick={this.setTarget.bind(this, 'horizontal', 'left')}
              label="Left" checked={this.state.targetOrigin.horizontal === 'left'}
            />
            <RadioButton
              onClick={this.setTarget.bind(this, 'horizontal', 'middle')}
              label="Middle" checked={this.state.targetOrigin.horizontal === 'middle'}
            />
            <RadioButton
              onClick={this.setTarget.bind(this, 'horizontal', 'right')}
              label="Right" checked={this.state.targetOrigin.horizontal === 'right'}
            />
          </div>
        </div>
        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={this.state.anchorOrigin}
          targetOrigin={this.state.targetOrigin}
          onRequestClose={this.handleRequestClose}
        >
          <Menu>
                        <MenuItem primaryText="Refresh"/>
                        <MenuItem primaryText="Help &amp; feedback"/>
                        <MenuItem primaryText="Settings"/>
                        <MenuItem primaryText="Sign out"/>
          </Menu>
        </Popover>
      </div>
    );
  }
}

// "http://www.material-ui.com/#/components/circular-progress"
const CircularProgressExampleSimple = () => (
  <div>
    <CircularProgress />
        <CircularProgress size={1.5}/>
        <CircularProgress size={2} thickness={1.5}/>
  </div>
);

class CircularProgressExampleDeterminate extends React.Component<{}, {completed?: number}> {
  private timer: number;

  constructor(props) {
    super(props);

    this.state = {
      completed: 0,
    };
  }

  componentDidMount() {
    this.timer = setTimeout(() => this.progress(5), 1000);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  progress(completed) {
    if (completed > 100) {
      this.setState({completed: 100});
    } else {
      this.setState({completed});
      const diff = Math.random() * 10;
      this.timer = setTimeout(() => this.progress(completed + diff), 1000);
    }
  }

  render() {
    return (
      <div>
                <CircularProgress mode="determinate" value={this.state.completed}/>
                <CircularProgress mode="determinate" value={this.state.completed} size={1.5}/>
                <CircularProgress mode="determinate" value={this.state.completed} size={2}/>
      </div>
    );
  }
}

// "http://www.material-ui.com/#/components/linear-progress"
const LinearProgressExampleSimple = () => (
    <LinearProgress mode="indeterminate"/>
);

class LinearProgressExampleDeterminate extends React.Component<{}, {completed?: number}> {
  private timer: number;

  constructor(props) {
    super(props);

    this.state = {
      completed: 0,
    };
  }

  componentDidMount() {
    this.timer = setTimeout(() => this.progress(5), 1000);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  progress(completed) {
    if (completed > 100) {
      this.setState({completed: 100});
    } else {
      this.setState({completed});
      const diff = Math.random() * 10;
      this.timer = setTimeout(() => this.progress(completed + diff), 1000);
    }
  }

  render() {
    return (
            <LinearProgress mode="determinate" value={this.state.completed}/>
    );
  }
}

// "http://www.material-ui.com/#/components/refresh-indicator"
const RefreshIndicatorExampleSimple = () => (
  <div style={styles.container}>
    <RefreshIndicator
      percentage={30}
      size={40}
      left={10}
      top={0}
      status="ready"
      style={styles.refresh}
    />
    <RefreshIndicator
      percentage={60}
      size={50}
      left={65}
      top={0}
      status="ready"
      style={styles.refresh}
    />
    <RefreshIndicator
      percentage={80}
      size={60}
      left={120}
      top={0}
      color={"red"}
      status="ready"
      style={styles.refresh}
    />
    <RefreshIndicator
      percentage={100}
      size={70}
      left={175}
      top={0}
      color={"red"} // Overridden by percentage={100}
      status="ready"
      style={styles.refresh}
    />
  </div>
);

const RefreshIndicatorExampleLoading = () => (
  <div style={styles.container}>
    <RefreshIndicator
      size={40}
      left={10}
      top={0}
      status="loading"
      style={styles.refresh}
    />
    <RefreshIndicator
      size={50}
      left={70}
      top={0}
      loadingColor={"#FF9800"}
      status="loading"
      style={styles.refresh}
    />
  </div>
);

// "http://www.material-ui.com/#/components/select-field"
class SelectFieldExampleSimple extends React.Component<{}, {value?: number}> {
  constructor(props) {
    super(props);
    this.state = {value: 1};
  }

  handleChange = (event, index, value) => this.setState({value});

  render() {
    return (
      <div>
        <SelectField value={this.state.value} onChange={this.handleChange}>
                    <MenuItem value={1} primaryText="Never"/>
                    <MenuItem value={2} primaryText="Every Night"/>
                    <MenuItem value={3} primaryText="Weeknights"/>
                    <MenuItem value={4} primaryText="Weekends"/>
                    <MenuItem value={5} primaryText="Weekly"/>
        </SelectField>
        <br />
        <SelectField value={1} disabled={true}>
                    <MenuItem value={1} primaryText="Disabled"/>
                    <MenuItem value={2} primaryText="Every Night"/>
        </SelectField>
        <br />
        <SelectField
          value={this.state.value}
          onChange={this.handleChange}
          style={styles.customWidth}
        >
                    <MenuItem value={1} primaryText="Custom width"/>
                    <MenuItem value={2} primaryText="Every Night"/>
                    <MenuItem value={3} primaryText="Weeknights"/>
                    <MenuItem value={4} primaryText="Weekends"/>
                    <MenuItem value={5} primaryText="Weekly"/>
        </SelectField>
        <br />
        <SelectField
          value={this.state.value}
          onChange={this.handleChange}
          autoWidth={true}
        >
                    <MenuItem value={1} primaryText="Auto width"/>
                    <MenuItem value={2} primaryText="Every Night"/>
                    <MenuItem value={3} primaryText="Weeknights"/>
                    <MenuItem value={4} primaryText="Weekends"/>
                    <MenuItem value={5} primaryText="Weekly"/>
        </SelectField>
      </div>
    );
  }
}

class SelectFieldLongMenuExample extends React.Component<{}, {value?: number}> {
  constructor(props) {
    super(props);
    this.state = {value: 10};
  }

  handleChange = (event, index, value) => this.setState({value});

  render() {
    return (
      <SelectField maxHeight={300} value={this.state.value} onChange={this.handleChange}>
        {items}
      </SelectField>
    );
  }
}

class SelectFieldExampleCustomLabel extends React.Component<{}, {value?: number}> {
  constructor(props) {
    super(props);
    this.state = {value: 1};
  }

  handleChange = (event, index, value) => this.setState({value});

  render() {
    return (
      <SelectField value={this.state.value} onChange={this.handleChange}>
                <MenuItem value={1} label="5 am - 12 pm" primaryText="Morning"/>
                <MenuItem value={2} label="12 pm - 5 pm" primaryText="Afternoon"/>
                <MenuItem value={3} label="5 pm - 9 pm" primaryText="Evening"/>
                <MenuItem value={4} label="9 pm - 5 am" primaryText="Night"/>
      </SelectField>
    );
  }
}

const itemsPeriod = [
    <MenuItem key={1} value={1} primaryText="Never"/>,
    <MenuItem key={2} value={2} primaryText="Every Night"/>,
    <MenuItem key={3} value={3} primaryText="Weeknights"/>,
    <MenuItem key={4} value={4} primaryText="Weekends"/>,
    <MenuItem key={5} value={5} primaryText="Weekly"/>,
];

export default class SelectFieldExampleFloatingLabel extends React.Component<{}, {value?: number}> {
  constructor(props) {
    super(props);
    this.state = {value: null};
  }

  handleChange = (event, index, value) => this.setState({value});

  render() {
    return (
      <div>
        <SelectField
          value={this.state.value}
          onChange={this.handleChange}
          floatingLabelText="Floating Label Text"
        >
          {itemsPeriod}
        </SelectField>
        <br />
        <SelectField
          value={this.state.value}
          onChange={this.handleChange}
          floatingLabelFixed={true}
          floatingLabelText="Styled Floating Label Text"
          floatingLabelStyle={{color: 'red'}}
        >
          {itemsPeriod}
        </SelectField>
      </div>
    );
  }
}

class SelectFieldExampleError extends React.Component<{}, {value?: number}> {
  constructor(props) {
    super(props);
    this.state = {value: null};
  }

  handleChange = (event, index, value) => this.setState({value});

  render() {
    const {value} = this.state;

    const night = value === 2 || value === 3;

    return (
      <div>
        <SelectField
          value={value}
          onChange={this.handleChange}
          errorText={!night && 'Should be Night'}
        >
          {itemsPeriod}
        </SelectField>
        <br />
        <SelectField
          value={value}
          onChange={this.handleChange}
          errorText={night && 'Should not be Night (Custom error style)'}
          errorStyle={{color: 'orange'}}
        >
          {itemsPeriod}
        </SelectField>
      </div>
    );
  }
}

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

class SelectFieldExampleMultiSelect extends React.Component<{}, {values?: string[]}> {
  constructor(props) {
    super(props);
    this.state = {values: []};
  }

  handleChange = (event, index, values) => this.setState({values});

  menuItems(values) {
    return names.map((name) => (
      <MenuItem
        key={name}
        insetChildren={true}
        checked={values && values.includes(name)}
        value={name}
        primaryText={name}
      />
    ));
  }

  render() {
    const {values} = this.state;
    return (
      <SelectField
        multiple={true}
        hintText="Select a name"
        value={values}
        onChange={this.handleChange}
      >
        {this.menuItems(values)}
      </SelectField>
    );
  }
}

const persons = [
  {value: 0, name: 'Oliver Hansen'},
  {value: 1, name: 'Van Henry'},
  {value: 2, name: 'April Tucker'},
  {value: 3, name: 'Ralph Hubbard'},
  {value: 4, name: 'Omar Alexander'},
  {value: 5, name: 'Carlos Abbott'},
  {value: 6, name: 'Miriam Wagner'},
  {value: 7, name: 'Bradley Wilkerson'},
  {value: 8, name: 'Virginia Andrews'},
  {value: 9, name: 'Kelly Snyder'},
];

class SelectFieldExampleSelectionRenderer extends React.Component<{}, {values?: string[]}> {
  constructor(props) {
    super(props);
    this.state = {values: []};
  }

  handleChange = (event, index, values) => this.setState({values});

  selectionRenderer = (values) => {
    switch (values.length) {
      case 0:
        return '';
      case 1:
        return persons[values[0]].name;
      default:
        return `${values.length} names selected`;
    }
  }

  menuItems(persons) {
    return persons.map((person) => (
      <MenuItem
        key={person.value}
        insetChildren={true}
        checked={this.state.values.indexOf(person.value) >= 0}
        value={person.value}
        primaryText={person.name}
      />
    ));
  }

  render() {
    return (
      <SelectField
        multiple={true}
        hintText="Select a name"
        value={this.state.values}
        onChange={this.handleChange}
        selectionRenderer={this.selectionRenderer}
      >
        {this.menuItems(persons)}
      </SelectField>
    );
  }
}

// "http://www.material-ui.com/#/components/slider"
const SliderExampleSimple = () => (
  <div>
    <Slider />
        <Slider defaultValue={0.5}/>
        <Slider defaultValue={1}/>
  </div>
);

const SliderExampleDisabled = () => (
  <div>
        <Slider disabled={true}/>
        <Slider disabled={true} value={0.5}/>
        <Slider disabled={true} value={1}/>
  </div>
);

const SliderExampleStep = () => (
    <Slider step={0.10} value={.5}/>
);

class SliderExampleControlled extends React.Component<{}, {firstSlider?: number, secondSlider?: number}> {
  state = {
    firstSlider: 0.5,
    secondSlider: 50,
  };

  handleFirstSlider(event, value) {
    this.setState({firstSlider: value});
  }

  handleSecondSlider(event, value) {
    this.setState({secondSlider: value});
  }

  render() {
    return (
      <div>
        <Slider
          defaultValue={0.5}
          value={this.state.firstSlider}
          onChange={this.handleFirstSlider.bind(this)}
        />
        <p>
          <span>{'The value of this slider is: '}</span>
          <span>{this.state.firstSlider}</span>
          <span>{' from a range of 0 to 1 inclusive'}</span>
        </p>
        <Slider
          min={0}
          max={100}
          step={1}
          defaultValue={50}
          value={this.state.secondSlider}
          onChange={this.handleSecondSlider.bind(this)}
        />
        <p>
          <span>{'The value of this slider is: '}</span>
          <span>{this.state.secondSlider}</span>
          <span>{' from a range of 0 to 100 inclusive'}</span>
        </p>
      </div>
    );
  }
}

// "http://www.material-ui.com/#/components/checkbox"
const CheckboxExampleSimple = () => (
  <div style={styles.block}>
    <Checkbox
      label="Simple"
      style={styles.checkbox}
    />
    <Checkbox
      label="Checked by default"
      defaultChecked={true}
      style={styles.checkbox}
    />
    <Checkbox
      checkedIcon={<ActionFavorite />}
      uncheckedIcon={<ActionFavoriteBorder />}
      label="Custom icon"
      style={styles.checkbox}
    />
    <Checkbox
      label="Disabled unchecked"
      disabled={true}
      style={styles.checkbox}
    />
    <Checkbox
      label="Disabled checked"
      checked={true}
      disabled={true}
      style={styles.checkbox}
    />
    <Checkbox
      label="Label on the left"
      labelPosition="left"
      style={styles.checkbox}
    />
    <Checkbox
      label="Overriding inputStyles on the left"
      labelPosition="left"
      style={styles.checkbox}
      inputStyle={styles.inputStyle}
    />
  </div>
);

// "http://www.material-ui.com/#/components/radio-button"
const RadioButtonExampleSimple = () => (
  <div>
    <RadioButtonGroup name="shipSpeed" defaultSelected="not_light">
      <RadioButton
        value="light"
        label="Simple"
        style={styles.radioButton}
      />
      <RadioButton
        value="not_light"
        label="Selected by default"
        style={styles.radioButton}
      />
      <RadioButton
        value="ludicrous"
        label="Custom icon"
        checkedIcon={<ActionFavorite />}
        uncheckedIcon={<ActionFavoriteBorder />}
        style={styles.radioButton}
      />
    </RadioButtonGroup>
    <RadioButtonGroup name="shipName" defaultSelected="community">
      <RadioButton
        value="enterprise"
        label="Disabled unchecked"
        disabled={true}
        style={styles.radioButton}
      />
      <RadioButton
        value="community"
        label="Disabled checked"
        disabled={true}
        style={styles.radioButton}
      />
    </RadioButtonGroup>
    <RadioButtonGroup name="notRight" labelPosition="left" style={styles.block}>
      <RadioButton
        value="reverse"
        label="Label on the left"
        style={styles.radioButton}
      />
    </RadioButtonGroup>
  </div>
);

// "http://www.material-ui.com/#/components/toggle"
const ToggleExampleSimple = () => (
  <div style={styles.block}>
    <Toggle
      label="Simple"
      style={styles.toggle}
    />
    <Toggle
      label="Toggled by default"
      defaultToggled={true}
      style={styles.toggle}
    />
    <Toggle
      label="Disabled"
      disabled={true}
      style={styles.toggle}
    />
    <Toggle
      label="Label on the right"
      labelPosition="right"
      style={styles.toggle}
      thumbSwitchedStyle={styles.toggle}
      trackSwitchedStyle={styles.toggle}
    />
  </div>
);

// "http://material-ui.com/#/components/snackbar"
class SnackbarExampleSimple extends React.Component<{}, {open?: boolean}> {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  handleTouchTap = () => {
    this.setState({
      open: true,
    });
  }

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  }

  render() {
    return (
      <div>
        <RaisedButton
          onTouchTap={this.handleTouchTap}
          label="Add to my calendar"
        />
        <Snackbar
          open={this.state.open}
          message="Event added to your calendar"
          autoHideDuration={4000}
          onRequestClose={this.handleRequestClose}
                    contentStyle={{margin: 16}}
        />
      </div>
    );
  }
}

class SnackbarExampleAction extends React.Component<{}, {open?: boolean, autoHideDuration?: number, message?: string}> {
  constructor(props) {
    super(props);
    this.state = {
      autoHideDuration: 4000,
      message: 'Event added to your calendar',
      open: false,
    };
  }

  handleTouchTap = () => {
    this.setState({
      open: true,
    });
  }

  handleActionTouchTap = () => {
    this.setState({
      open: false,
    });
    alert('Event removed from your calendar.');
  }

  handleChangeDuration = (event) => {
    const value = event.target.value;
    this.setState({
      autoHideDuration: value.length > 0 ? parseInt(value, 10) : 0,
    });
  }

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  }

  render() {
    return (
      <div>
        <RaisedButton
          onTouchTap={this.handleTouchTap}
          label="Add to my calendar"
        />
        <br />
        <TextField
          floatingLabelText="Auto Hide Duration in ms"
          value={this.state.autoHideDuration}
          onChange={this.handleChangeDuration}
        />
        <Snackbar
          open={this.state.open}
          message={this.state.message}
          action="undo"
          autoHideDuration={this.state.autoHideDuration}
          onActionTouchTap={this.handleActionTouchTap}
          onRequestClose={this.handleRequestClose}
        />
      </div>
    );
  }
}

class SnackbarExampleTwice extends React.Component<{}, {open?: boolean, message?: string}> {
  private timer: number;

  constructor(props) {
    super(props);
    this.state = {
      message: 'Event 1 added to your calendar',
      open: false,
    };
    this.timer = undefined;
  }

  componentWillUnMount() {
    clearTimeout(this.timer);
  }

  handleTouchTap = () => {
    this.setState({
      open: true,
    });

    this.timer = setTimeout(() => {
      this.setState({
        message: `Event ${Math.round(Math.random() * 100)} added to your calendar`,
      });
    }, 1500);
  }

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  }

  render() {
    return (
      <div>
        <RaisedButton
          onTouchTap={this.handleTouchTap}
          label="Add to my calendar two times"
        />
        <Snackbar
          open={this.state.open}
          message={this.state.message}
          action="undo"
          autoHideDuration={3000}
          onRequestClose={this.handleRequestClose}
        />
      </div>
    );
  }
}

// "http://www.material-ui.com/#/components/stepper"
class HorizontalLinearStepper extends React.Component<{}, {stepIndex?: number, finished?: boolean}> {
  state = {
    finished: false,
    stepIndex: 0,
  };

  handleNext = () => {
    const {stepIndex} = this.state;
    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex >= 2,
    });
  }

  handlePrev = () => {
    const {stepIndex} = this.state;
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1});
    }
  }

  getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return 'Select campaign settings...';
      case 1:
        return 'What is an ad group anyways?';
      case 2:
        return 'This is the bit I really care about!';
      default:
        return 'You\'re a long way from home sonny jim!';
    }
  }

  render() {
    const {finished, stepIndex} = this.state;
    const contentStyle = {margin: '0 16px'};

    return (
      <div style={{width: '100%', maxWidth: 700, margin: 'auto'}}>
        <Stepper activeStep={stepIndex}>
          <Step>
            <StepLabel>Select campaign settings</StepLabel>
          </Step>
          <Step>
            <StepLabel>Create an ad group</StepLabel>
          </Step>
          <Step>
            <StepLabel>Create an ad</StepLabel>
          </Step>
        </Stepper>
        <div style={contentStyle}>
          {finished ? (
            <p>
              <a
                href="#"
                onClick={(event) => {
                  event.preventDefault();
                  this.setState({stepIndex: 0, finished: false});
                }}
              >
                Click here
              </a> to reset the example.
            </p>
          ) : (
            <div>
              <p>{this.getStepContent(stepIndex)}</p>
              <div style={{marginTop: 12}}>
                <FlatButton
                  label="Back"
                  disabled={stepIndex === 0}
                  onTouchTap={this.handlePrev}
                  style={{marginRight: 12}}
                />
                <RaisedButton
                  label={stepIndex === 2 ? 'Finish' : 'Next'}
                  primary={true}
                  onTouchTap={this.handleNext}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

class VerticalLinearStepper extends React.Component<{}, {stepIndex?: number, finished?: boolean}> {
  state = {
    finished: false,
    stepIndex: 0,
  };

  handleNext = () => {
    const {stepIndex} = this.state;
    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex >= 2,
    });
  }

  handlePrev = () => {
    const {stepIndex} = this.state;
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1});
    }
  }

  renderStepActions(step) {
    const {stepIndex} = this.state;

    return (
      <div style={{margin: '12px 0'}}>
        <RaisedButton
          label={stepIndex === 2 ? 'Finish' : 'Next'}
          disableTouchRipple={true}
          disableFocusRipple={true}
          primary={true}
          onTouchTap={this.handleNext}
          style={{marginRight: 12}}
        />
        {step > 0 && (
          <FlatButton
            label="Back"
            disabled={stepIndex === 0}
            disableTouchRipple={true}
            disableFocusRipple={true}
            onTouchTap={this.handlePrev}
          />
        )}
      </div>
    );
  }

  render() {
    const {finished, stepIndex} = this.state;

    return (
      <div style={{width: 380, height: 400, margin: 'auto'}}>
        <Stepper activeStep={stepIndex} orientation="vertical">
          <Step>
            <StepLabel>Select campaign settings</StepLabel>
            <StepContent>
              <p>
                For each ad campaign that you create, you can control how much
                you're willing to spend on clicks and conversions, which networks
                and geographical locations you want your ads to show on, and more.
              </p>
              {this.renderStepActions(0)}
            </StepContent>
          </Step>
          <Step>
            <StepLabel>Create an ad group</StepLabel>
            <StepContent>
              <p>An ad group contains one or more ads which target a shared set of keywords.</p>
              {this.renderStepActions(1)}
            </StepContent>
          </Step>
          <Step>
            <StepLabel>Create an ad</StepLabel>
            <StepContent>
              <p>
                Try out different ad text to see what brings in the most customers,
                and learn how to enhance your ads using features like ad extensions.
                If you run into any problems with your ads, find out how to tell if
                they're running and how to resolve approval issues.
              </p>
              {this.renderStepActions(2)}
            </StepContent>
          </Step>
        </Stepper>
        {finished && (
          <p style={{margin: '20px 0', textAlign: 'center'}}>
            <a
              href="#"
              onClick={(event) => {
                event.preventDefault();
                this.setState({stepIndex: 0, finished: false});
              }}
            >
              Click here
            </a> to reset the example.
          </p>
        )}
      </div>
    );
  }
}

class HorizontalNonLinearStepper extends React.Component<{}, {stepIndex?: number}> {
  state = {
    stepIndex: 0,
  };

  handleNext = () => {
    const {stepIndex} = this.state;
    if (stepIndex < 2) {
      this.setState({stepIndex: stepIndex + 1});
    }
  }

  handlePrev = () => {
    const {stepIndex} = this.state;
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1});
    }
  }

  getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return 'Select campaign settings...';
      case 1:
        return 'What is an ad group anyways?';
      case 2:
        return 'This is the bit I really care about!';
      default:
        return 'You\'re a long way from home sonny jim!';
    }
  }

  render() {
    const {stepIndex} = this.state;
    const contentStyle = {margin: '0 16px'};

    return (
      <div style={{width: '100%', maxWidth: 700, margin: 'auto'}}>
        <Stepper linear={false} activeStep={stepIndex}>
          <Step>
            <StepButton onClick={() => this.setState({stepIndex: 0})}>
              Select campaign settings
            </StepButton>
          </Step>
          <Step>
            <StepButton onClick={() => this.setState({stepIndex: 1})}>
              Create an ad group
            </StepButton>
          </Step>
          <Step>
            <StepButton onClick={() => this.setState({stepIndex: 2})}>
              Create an ad
            </StepButton>
          </Step>
        </Stepper>
        <div style={contentStyle}>
          <p>{this.getStepContent(stepIndex)}</p>
          <div style={{marginTop: 12}}>
            <FlatButton
              label="Back"
              disabled={stepIndex === 0}
              onTouchTap={this.handlePrev}
              style={{marginRight: 12}}
            />
            <RaisedButton
              label="Next"
              disabled={stepIndex === 2}
              primary={true}
              onTouchTap={this.handleNext}
            />
          </div>
        </div>
      </div>
    );
  }
}

class VerticalNonLinear extends React.Component<{}, {stepIndex?: number}> {
  state = {
    stepIndex: 0,
  };

  handleNext = () => {
    const {stepIndex} = this.state;
    if (stepIndex < 2) {
      this.setState({stepIndex: stepIndex + 1});
    }
  }

  handlePrev = () => {
    const {stepIndex} = this.state;
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1});
    }
  }

  renderStepActions(step) {
    return (
      <div style={{margin: '12px 0'}}>
        <RaisedButton
          label="Next"
          disableTouchRipple={true}
          disableFocusRipple={true}
          primary={true}
          onTouchTap={this.handleNext}
          style={{marginRight: 12}}
        />
        {step > 0 && (
          <FlatButton
            label="Back"
            disableTouchRipple={true}
            disableFocusRipple={true}
            onTouchTap={this.handlePrev}
          />
        )}
      </div>
    );
  }

  render() {
    const {stepIndex} = this.state;

    return (
      <div style={{width: 380, height: 400, margin: 'auto'}}>
        <Stepper
          activeStep={stepIndex}
          linear={false}
          orientation="vertical"
        >
          <Step>
            <StepButton onClick={() => this.setState({stepIndex: 0})}>
              Select campaign settings
            </StepButton>
            <StepContent>
              <p>
                For each ad campaign that you create, you can control how much
                you're willing to spend on clicks and conversions, which networks
                and geographical locations you want your ads to show on, and more.
              </p>
              {this.renderStepActions(0)}
            </StepContent>
          </Step>
          <Step>
            <StepButton onClick={() => this.setState({stepIndex: 1})}>
              Create an ad group
            </StepButton>
            <StepContent>
              <p>An ad group contains one or more ads which target a shared set of keywords.</p>
              {this.renderStepActions(1)}
            </StepContent>
          </Step>
          <Step>
            <StepButton onClick={() => this.setState({stepIndex: 2})}>
              Create an ad
            </StepButton>
            <StepContent>
              <p>
                Try out different ad text to see what brings in the most customers,
                and learn how to enhance your ads using features like ad extensions.
                If you run into any problems with your ads, find out how to tell if
                they're running and how to resolve approval issues.
              </p>
              {this.renderStepActions(2)}
            </StepContent>
          </Step>
        </Stepper>
      </div>
    );
  }
}

const getStyles = () => {
  return {
    root: {
      width: '100%',
      maxWidth: 700,
      margin: 'auto',
    },
    content: {
      margin: '0 16px',
    },
    actions: {
      marginTop: 12,
    },
    backButton: {
      marginRight: 12,
    },
  };
};

class GranularControlStepper extends React.Component<{}, {stepIndex?: number, visited?: number[]}> {
  state = {
    stepIndex: null,
    visited: [],
  };

  componentWillMount() {
    const {stepIndex, visited} = this.state;
    this.setState({visited: visited.concat(stepIndex)});
  }

  componentWillUpdate(nextProps, nextState) {
    const {stepIndex, visited} = nextState;
    if (visited.indexOf(stepIndex) === -1) {
      this.setState({visited: visited.concat(stepIndex)});
    }
  }

  handleNext = () => {
    const {stepIndex} = this.state;
    if (stepIndex < 2) {
      this.setState({stepIndex: stepIndex + 1});
    }
  }

  handlePrev = () => {
    const {stepIndex} = this.state;
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1});
    }
  }

  getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return 'Select campaign settings...';
      case 1:
        return 'What is an ad group anyways?';
      case 2:
        return 'This is the bit I really care about!';
      default:
        return 'Click a step to get started.';
    }
  }

  render() {
    const {stepIndex, visited} = this.state;
    const styles = getStyles();

    return (
      <div style={styles.root}>
        <p>
          <a
            href="#"
            onClick={(event) => {
              event.preventDefault();
              this.setState({stepIndex: null, visited: []});
            }}
          >
            Click here
          </a> to reset the example.
        </p>
        <Stepper linear={false}>
          <Step completed={visited.indexOf(0) !== -1} active={stepIndex === 0}>
            <StepButton onClick={() => this.setState({stepIndex: 0})}>
              Select campaign settings
            </StepButton>
          </Step>
          <Step completed={visited.indexOf(1) !== -1} active={stepIndex === 1}>
            <StepButton onClick={() => this.setState({stepIndex: 1})}>
              Create an ad group
            </StepButton>
          </Step>
          <Step completed={visited.indexOf(2) !== -1} active={stepIndex === 2}>
            <StepButton onClick={() => this.setState({stepIndex: 2})}>
              Create an ad
            </StepButton>
          </Step>
        </Stepper>
        <div style={styles.content}>
          <p>{this.getStepContent(stepIndex)}</p>
          {stepIndex !== null && (
            <div style={styles.actions}>
              <FlatButton
                label="Back"
                disabled={stepIndex === 0}
                onTouchTap={this.handlePrev}
                style={styles.backButton}
              />
              <RaisedButton
                label="Next"
                primary={true}
                onTouchTap={this.handleNext}
              />
            </div>
          )}
        </div>
      </div>
    );
  }
}

class CustomIcon extends React.Component<{}, {stepIndex?: number}> {
  state = {
    stepIndex: 0,
  };

  handleNext = () => {
    const {stepIndex} = this.state;
    if (stepIndex < 2) {
      this.setState({stepIndex: stepIndex + 1});
    }
  }

  handlePrev = () => {
    const {stepIndex} = this.state;
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1});
    }
  }

  getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return 'Select campaign settings...';
      case 1:
        return 'What is an ad group anyways?';
      case 2:
        return 'This is the bit I really care about!';
      default:
        return 'You\'re a long way from home sonny jim!';
    }
  }

  render() {
    return (
      <div style={{width: '100%', maxWidth: 700, margin: 'auto'}}>
        <Stepper linear={false}>
          <Step completed={false}>
            <StepLabel>
              Select campaign settings
            </StepLabel>
          </Step>
          <Step completed={false}>
            <StepLabel
              icon={<AlertWarning color={red500} />}
              style={{color: red500}}
            >
              Create an ad group
            </StepLabel>
          </Step>
          <Step completed={false}>
            <StepLabel>
              Create an ad
            </StepLabel>
          </Step>
        </Stepper>
      </div>
    );
  }
}

// "http://www.material-ui.com/#/components/subheader"
// Included in ListExampleChat and ListExampleFolder

// "http://www.material-ui.com/#/components/table"
const TableExampleSimple = () => (
  <Table>
    <TableHeader>
      <TableRow>
        <TableHeaderColumn>ID</TableHeaderColumn>
        <TableHeaderColumn>Name</TableHeaderColumn>
        <TableHeaderColumn>Status</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableRowColumn>1</TableRowColumn>
        <TableRowColumn>John Smith</TableRowColumn>
        <TableRowColumn>Employed</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>2</TableRowColumn>
        <TableRowColumn>Randal White</TableRowColumn>
        <TableRowColumn>Unemployed</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>3</TableRowColumn>
        <TableRowColumn>Stephanie Sanders</TableRowColumn>
        <TableRowColumn>Employed</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>4</TableRowColumn>
        <TableRowColumn>Steve Brown</TableRowColumn>
        <TableRowColumn>Employed</TableRowColumn>
      </TableRow>
    </TableBody>
  </Table>
);

const tableData: Array<{name: string, status: string, selected?: boolean}> = [
  {
    name: 'John Smith',
    status: 'Employed',
    selected: true,
  },
  {
    name: 'Randal White',
    status: 'Unemployed',
  },
  {
    name: 'Stephanie Sanders',
    status: 'Employed',
    selected: true,
  },
  {
    name: 'Steve Brown',
    status: 'Employed',
  },
  {
    name: 'Joyce Whitten',
    status: 'Employed',
  },
  {
    name: 'Samuel Roberts',
    status: 'Employed',
  },
  {
    name: 'Adam Moore',
    status: 'Employed',
  },
];

interface TableExampleComplexState {
  fixedHeader?: boolean;
  fixedFooter?: boolean;
  stripedRows?: boolean;
  showRowHover?: boolean;
  selectable?: boolean;
  multiSelectable?: boolean;
  enableSelectAll?: boolean;
  deselectOnClickaway?: boolean;
  showCheckboxes?: boolean;
  height?: string;
}

class TableExampleComplex extends React.Component<{}, TableExampleComplexState> {
  constructor(props) {
    super(props);

    this.state = {
      fixedHeader: true,
      fixedFooter: true,
      stripedRows: false,
      showRowHover: false,
      selectable: true,
      multiSelectable: false,
      enableSelectAll: false,
      deselectOnClickaway: true,
      showCheckboxes: true,
      height: '300px',
    };
  }

  handleToggle = (event, toggled) => {
    this.setState({
      [event.target.name]: toggled,
    });
  }

  handleChange = (event) => {
    this.setState({height: event.target.value});
  }

  render() {
    return (
      <div>
        <Table
          height={this.state.height}
          fixedHeader={this.state.fixedHeader}
          fixedFooter={this.state.fixedFooter}
          selectable={this.state.selectable}
          multiSelectable={this.state.multiSelectable}
        >
          <TableHeader
            displaySelectAll={this.state.showCheckboxes}
            adjustForCheckbox={this.state.showCheckboxes}
            enableSelectAll={this.state.enableSelectAll}
          >
            <TableRow>
              <TableHeaderColumn colSpan={3} tooltip="Super Header" style={{textAlign: 'center'}}>
                Super Header
              </TableHeaderColumn>
            </TableRow>
            <TableRow>
              <TableHeaderColumn tooltip="The ID">ID</TableHeaderColumn>
              <TableHeaderColumn tooltip="The Name">Name</TableHeaderColumn>
              <TableHeaderColumn tooltip="The Status">Status</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody
            displayRowCheckbox={this.state.showCheckboxes}
            deselectOnClickaway={this.state.deselectOnClickaway}
            showRowHover={this.state.showRowHover}
            stripedRows={this.state.stripedRows}
          >
                        {tableData.map((row, index) => (
              <TableRow key={index} selected={row.selected}>
                <TableRowColumn>{index}</TableRowColumn>
                <TableRowColumn>{row.name}</TableRowColumn>
                <TableRowColumn>{row.status}</TableRowColumn>
              </TableRow>
              ))}
          </TableBody>
          <TableFooter
            adjustForCheckbox={this.state.showCheckboxes}
          >
            <TableRow>
              <TableRowColumn>ID</TableRowColumn>
              <TableRowColumn>Name</TableRowColumn>
              <TableRowColumn>Status</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn colSpan={3} style={{textAlign: 'center'}}>
                Super Footer
              </TableRowColumn>
            </TableRow>
          </TableFooter>
        </Table>

        <div style={styles.propContainer}>
          <h3>Table Properties</h3>
          <TextField
            floatingLabelText="Table Body Height"
            defaultValue={this.state.height}
            onChange={this.handleChange}
          />
          <Toggle
            name="fixedHeader"
            label="Fixed Header"
            onToggle={this.handleToggle}
            defaultToggled={this.state.fixedHeader}
          />
          <Toggle
            name="fixedFooter"
            label="Fixed Footer"
            onToggle={this.handleToggle}
            defaultToggled={this.state.fixedFooter}
          />
          <Toggle
            name="selectable"
            label="Selectable"
            onToggle={this.handleToggle}
            defaultToggled={this.state.selectable}
          />
          <Toggle
            name="multiSelectable"
            label="Multi-Selectable"
            onToggle={this.handleToggle}
            defaultToggled={this.state.multiSelectable}
          />
          <Toggle
            name="enableSelectAll"
            label="Enable Select All"
            onToggle={this.handleToggle}
            defaultToggled={this.state.enableSelectAll}
          />
          <h3 style={styles.propToggleHeader}>TableBody Properties</h3>
          <Toggle
            name="deselectOnClickaway"
            label="Deselect On Clickaway"
            onToggle={this.handleToggle}
            defaultToggled={this.state.deselectOnClickaway}
          />
          <Toggle
            name="stripedRows"
            label="Stripe Rows"
            onToggle={this.handleToggle}
            defaultToggled={this.state.stripedRows}
          />
          <Toggle
            name="showRowHover"
            label="Show Row Hover"
            onToggle={this.handleToggle}
            defaultToggled={this.state.showRowHover}
          />
          <h3 style={styles.propToggleHeader}>Multiple Properties</h3>
          <Toggle
            name="showCheckboxes"
            label="Show Checkboxes"
            onToggle={this.handleToggle}
            defaultToggled={this.state.showCheckboxes}
          />
        </div>
      </div>
    );
  }
}

// "http://www.material-ui.com/#/components/tabs"
function handleActive(tab) {
  alert(`A tab with this value property ${tab.props.value} was activated.`);
}

const TabsExampleSimple = () => (
  <Tabs tabTemplateStyle={{backgroundColor: 'red'}}>
        <Tab label="Item One">
      <div>
        <h2 style={styles.headline}>Tab One</h2>
        <p>
          This is an example tab.
        </p>
        <p>
          You can put any sort of HTML or react component in here. It even keeps the component state!
        </p>
                <Slider name="slider0" defaultValue={0.5}/>
      </div>
    </Tab>
        <Tab label="Item Two">
      <div>
        <h2 style={styles.headline}>Tab Two</h2>
        <p>
          This is another example tab.
        </p>
      </div>
    </Tab>
    <Tab
      label="onActive"
      value="/home"
      onActive={handleActive}
    >
      <div>
        <h2 style={styles.headline}>Tab Three</h2>
        <p>
          This is a third example tab.
        </p>
      </div>
    </Tab>
  </Tabs>
);

class TabsExampleControlled extends React.Component<{}, {value?: string}> {
  constructor(props) {
    super(props);
    this.state = {
      value: 'a',
    };
  }

  handleChange = (value) => {
    this.setState({
      value
    });
  }

  render() {
    return (
      <Tabs
        value={this.state.value}
        onChange={this.handleChange}
      >
                <Tab label="Tab A" value="a">
          <div>
            <h2 style={styles.headline}>Controllable Tab A</h2>
            <p>
              Tabs are also controllable if you want to programmatically pass them their values.
              This allows for more functionality in Tabs such as not
              having any Tab selected or assigning them different values.
            </p>
          </div>
        </Tab>
        <Tab label="Tab B" value="b">
          <div>
            <h2 style={styles.headline}>Controllable Tab B</h2>
            <p>
              This is another example of a controllable tab. Remember, if you
              use controllable Tabs, you need to give all of your tabs values or else
              you wont be able to select them.
            </p>
          </div>
        </Tab>
      </Tabs>
    );
  }
}

const TabsExampleIcon = () => (
  <Tabs>
        <Tab icon={<FontIcon className="muidocs-icon-action-home" />}/>
        <Tab icon={<ActionFlightTakeoff />}/>
        <Tab icon={<FontIcon className="material-icons">favorite</FontIcon>}/>
  </Tabs>
);

const TabsExampleIconText = () => (
  <Tabs>
    <Tab
      icon={<FontIcon className="material-icons">phone</FontIcon>}
      label="RECENTS"
    />
    <Tab
      icon={<FontIcon className="material-icons">favorite</FontIcon>}
      label="FAVORITES"
    />
    <Tab
      icon={<MapsPersonPin />}
      label="NEARBY"
    />
  </Tabs>
);

// "http://www.material-ui.com/#/components/text-field"
const TextFieldExampleSimple = () => (
  <div>
    <TextField
      hintText="Hint Text"
    /><br />
    <br />
    <TextField
      hintText="The hint text can be as long as you want, it will wrap."
    /><br />
    <TextField
      id="text-field-default"
      defaultValue="Default Value"
    /><br />
    <TextField
      hintText="Hint Text"
      floatingLabelText="Floating Label Text"
    /><br />
    <TextField
      hintText="Hint Text"
      floatingLabelText="Fixed Floating Label Text"
      floatingLabelFixed={true}
    /><br />
    <TextField
      hintText="Password Field"
      floatingLabelText="Password"
      type="password"
    /><br />
    <TextField
      hintText="MultiLine with rows: 2 and rowsMax: 4"
      multiLine={true}
      rows={2}
      rowsMax={4}
    /><br />
    <TextField
      hintText="Message Field"
      floatingLabelText="MultiLine and FloatingLabel"
      multiLine={true}
      rows={2}
    /><br />
    <TextField
      hintText="Full width"
      fullWidth={true}
    /><br />
    <TextField
      type="number"
      min={5}
      max={50}
      step={5}
    /><br />
    <TextField
        hintText="Hint Text"
        errorText="This field is required"
        required
    />
  </div>
);

const TextFieldExampleError = () => (
  <div>
    <TextField
      hintText="Hint Text"
      errorText="This field is required"
    /><br />
    <TextField
      hintText="Hint Text"
      errorText="The error text can be as long as you want, it will wrap."
    /><br />
    <TextField
      hintText="Hint Text"
      errorText="This field is required"
      floatingLabelText="Floating Label Text"
    /><br />
    <TextField
      hintText="Message Field"
      errorText="This field is required."
      floatingLabelText="MultiLine and FloatingLabel"
      multiLine={true}
      rows={2}
    /><br />
  </div>
);

const TextFieldExampleCustomize = () => (
  <div>
    <TextField
      hintText="Styled Hint Text"
      hintStyle={styles.errorStyle}
    /><br />
    <TextField
      hintText="Custom error color"
      errorText="This field is required."
      errorStyle={styles.errorStyle}
    /><br />
    <TextField
      hintText="Custom Underline Color"
      underlineStyle={styles.underlineStyle}
    /><br />
    <TextField
      hintText="Custom Underline Focus Color"
      underlineFocusStyle={styles.underlineStyle}
    /><br />
    <TextField
      floatingLabelText="Styled Floating Label Text"
      floatingLabelStyle={styles.floatingLabelStyle}
      floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
    />
  </div>
);

const TextFieldExampleDisabled = () => (
  <div>
    <TextField
      disabled={true}
      hintText="Disabled Hint Text"
    /><br />
    <TextField
      disabled={true}
      id="text-field-disabled"
      defaultValue="Disabled Value"
    /><br />
    <TextField
      disabled={true}
      hintText="Disabled Hint Text"
      floatingLabelText="Floating Label Text"
    /><br />
    <TextField
      disabled={true}
      hintText="Disabled Hint Text"
      defaultValue="Disabled With Floating Label"
      floatingLabelText="Floating Label Text"
    />
  </div>
);

class TextFieldExampleControlled extends React.Component<{}, {value?: string}> {
  constructor(props) {
    super(props);

    this.state = {
      value: 'Property Value',
    };
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <TextField
          id="text-field-controlled"
          value={this.state.value}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

// "http://www.material-ui.com/#/components/time-picker"
const TimePickerExampleSimple = () => (
  <div>
    <TimePicker
      hintText="12hr Format"
    />
    <TimePicker
      format="24hr"
      hintText="24hr Format"
    />
    <TimePicker
      disabled={true}
      format="24hr"
      hintText="Disabled TimePicker"
    />
  </div>
);

class TimePickerExampleComplex extends React.Component<{}, {value24?: Date, value12?: Date}> {
  constructor(props) {
    super(props);
    this.state = {value24: null, value12: null};
  }

  handleChangeTimePicker24 = (event, date) => {
    this.setState({value24: date});
  }

  handleChangeTimePicker12 = (event, date) => {
    this.setState({value12: date});
  }

  render() {
    return (
      <div>
        <TimePicker
          format="ampm"
          hintText="12hr Format"
          value={this.state.value12}
          onChange={this.handleChangeTimePicker12}
        />
        <TimePicker
          format="24hr"
          hintText="24hr Format"
          value={this.state.value24}
          onChange={this.handleChangeTimePicker24}
        />
      </div>
    );
  }
}

const TimePickerInternational = () => (
  <div>
    <TimePicker
      hintText="Custom Labels"
      okLabel="确定"
      cancelLabel="取消"
    />
  </div>
);

// "http://www.material-ui.com/#/components/toolbar"
class ToolbarExamplesSimple extends React.Component<{}, {value?: number}> {
  constructor(props) {
    super(props);
    this.state = {
      value: 3,
    };
  }

  handleChange = (event, index, value) => this.setState({value});

  render() {
    return (
      <Toolbar>
        <ToolbarGroup firstChild={true}>
          <DropDownMenu value={this.state.value} onChange={this.handleChange}>
                        <MenuItem value={1} primaryText="All Broadcasts"/>
                        <MenuItem value={2} primaryText="All Voice"/>
                        <MenuItem value={3} primaryText="All Text"/>
                        <MenuItem value={4} primaryText="Complete Voice"/>
                        <MenuItem value={5} primaryText="Complete Text"/>
                        <MenuItem value={6} primaryText="Active Voice"/>
                        <MenuItem value={7} primaryText="Active Text"/>
          </DropDownMenu>
        </ToolbarGroup>
        <ToolbarGroup>
                    <ToolbarTitle text="Options"/>
                    <FontIcon className="muidocs-icon-custom-sort"/>
          <ToolbarSeparator />
                    <RaisedButton label="Create Broadcast" primary={true}/>
          <IconMenu
            iconButtonElement={
              <IconButton touch={true}>
                <NavigationExpandMore />
              </IconButton>
            }
          >
                        <MenuItem primaryText="Download"/>
                        <MenuItem primaryText="More Info"/>
          </IconMenu>
        </ToolbarGroup>
      </Toolbar>
    );
  }
}

const componentWithWidth = withWidth()(ToolbarExamplesSimple);

class BottomNavigationExample extends React.Component<{}, {
  index?: number
}> {
  constructor() {
    super();
    this.state = {
      index: 0
    };
  }
  render() {
    return <BottomNavigation selectedIndex={this.state.index}>
      <BottomNavigationItem label='0' icon={<ActionHome/>} onTouchTap={() => this.setState({index: 0})}/>
      <BottomNavigationItem label='1' icon={<ActionInfo/>} onTouchTap={() => this.setState({index: 1})}/>
    </BottomNavigation>;
  }
}

class MaterialUiTests extends React.Component<{}, {}> {
    render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
                <AppBar title="My AppBar"/>

      </MuiThemeProvider>
    );
  }
}

// "http://www.material-ui.com/#/get-started/usage"
ReactDOM.render(
  <MaterialUiTests />,
  document.getElementById('app')
);
