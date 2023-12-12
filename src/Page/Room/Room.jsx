import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useParams } from "react-router-dom";


const Room = () => {
    const { roomID } = useParams()

    const myMeeting = async (element) => {
        const appID = 1835550678
        const serverSecret = "debf93213d3fbb08442a6d9e2971f10a"
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID, Date.now().toString(), "biddut");
        const zp = ZegoUIKitPrebuilt.create(kitToken);
        zp.joinRoom({
            container: element,
            scenario: {
                mode: ZegoUIKitPrebuilt.VideoConference,
            },
            turnOnCameraWhenJoining: true,
            showMyCameraToggleButton: true,
            showAudioVideoSettingsButton: true,
            showScreenSharingButton: true ,
            showPreJoinView: false,
            sharedLinks: [{
                url: window.location.origin + window.location.pathname + '?roomId=' + roomID,
            }],
            onUserAvatarSetter:(userList) => {
                userList.forEach(user => {
                    user.setUserAvatar("https://xxx.xxx.xx/xx.png")
                })
            }, 
        });
    }

    return (
        <div className="pt-10">
            <div className="h-full" ref={myMeeting}>
                room{roomID}
            </div>
        </div>
    );
};

export default Room;