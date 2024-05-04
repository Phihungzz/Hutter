import Header from "@/components/Header";
import NotificationsFeed from "@/components/NotificationsFeed";
import { NextPageContext } from "next";
import { getSession } from "next-auth/react";

export async function getServerSideProps(conntext: NextPageContext) {
    const session = await getSession(conntext);

    if(!session) {
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }

    return {
        props: {
            session
        }
    }
}

const Notifications = () => {
    return(
        <div>
            <Header label="Thông báo" showBackArrow />
            <NotificationsFeed />
        </div>
    );
}
export default Notifications;