/* Sticky header: nav, mega menu, notifications, language
   Ported verbatim from `HeartStamp Home v5.7.dc.html`. */
import { WebsiteNavV2 } from '@heartstampxo/design-system/hs';
import { type V } from '../lib/dc';

export function TopNav(v: V) {
  return (
    <>
    <div className={"hs-ds-scope"}>
      {" "}
      <div className="sc-host-x" style={{ display: 'contents' }}>
        <WebsiteNavV2 avatarSrc="assets/avatar.png" onSearch={v.nav2?.search} onCategoryHover={v.nav2?.categoryHover} onAskStampy={v.nav2?.askStampy} onProfile={v.profile?.toggle} remindersArtSrc="uploads/wytr58bsnnrmt0d03jssfpzegw.webm" remindersArtFallbackSrc="uploads/reminder.png" onNotifications={v.nav2?.notifications} onNotificationItemClick={v.notif?.openItem} onNotificationArchive={v.notif?.archive} onNotificationMarkAllRead={v.notif?.markAllRead} />
      </div>
    </div>
    </>
  );
}
