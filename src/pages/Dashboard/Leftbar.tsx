import React, { useEffect } from "react";
import { TabContent, TabPane } from "reactstrap";

// hooks
import { useRedux } from "../../hooks/index";
import { useNavigate } from "react-router-dom";
// constants
import { TABS } from "../../constants/index";

// component
import Profile from "./Profile/index";
import Chats from "./Chats/index";
import Contacts from "./Contacts/index";
import Calls from "./Calls/index";
import Bookmark from "./Bookmark/index";
import Settings from "./Settings/index";
import File from "./ConversationUser/File";

interface LeftbarProps { }
const Leftbar = (props: LeftbarProps) => {
  // global store
  const { useAppSelector } = useRedux();

  const { activeTab } = useAppSelector(state => ({
    activeTab: state.Layout.activeTab,
  }));

  const activePage: string = activeTab?.split("-")[1]
  const navigate = useNavigate()
  // eslint-disable-next-line no-use-before-define
  useEffect(() => {
    if (activePage) {
      navigate(`/${activePage}`)
    }
  }, [activePage, navigate])

  return (
    <>
      {/* start chat-leftsidebar */}
      <div className="chat-leftsidebar">
        <TabContent activeTab={activeTab}>
          {/* Start Profile tab-pane */}
          <TabPane
            tabId={TABS.USERS}
            role="tabpanel"
          >
            <Profile />
          </TabPane>

          <TabPane
            tabId={TABS.CHAT}
            role="tabpanel"
          >
            <Chats />
          </TabPane>

          <TabPane
            tabId={TABS.CONTACTS}
            role="tabpanel"
          >
            <Contacts />
          </TabPane>

          <TabPane
            tabId={TABS.CALLS}
            role="tabpanel"
          >
            <Calls />
          </TabPane>

          <TabPane
            tabId={TABS.BOOKMARK}
            role="tabpanel"
          >
            <Bookmark />
          </TabPane>

          <TabPane
            tabId={TABS.SETTINGS}
            role="tabpanel"
          >
            <Settings />
          </TabPane>
          <TabPane
            tabId={TABS.FILES}
            role="tabpanel"
          >
            <File />
          </TabPane>
        </TabContent>
      </div>
    </>
  );
};

export default Leftbar;
