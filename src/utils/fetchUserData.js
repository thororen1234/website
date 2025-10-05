export async function fetchUserData() {
    const userId = "848339671629299742";
    const userData = {
        badges: [],
        status: "",
        avatarUrl: "",
    };

    try {
        const badgeResponse = await fetch(
            `https://badges.equicord.org/${userId}?seperated=true&capitalize=true`
        );
        if (badgeResponse.ok) {
            const badgeData = await badgeResponse.json();

            if (badgeData?.badges) {
                Object.entries(badgeData.badges).forEach(([type, badgeList]) => {
                    if (Array.isArray(badgeList)) {
                        badgeList.forEach((badge) => {
                            if (badge && badge.badge) {
                                userData.badges.push({
                                    name: badge.tooltip || badge.badge,
                                    tooltip: badge.tooltip || badge.badge,
                                    icon: badge.badge,
                                    type,
                                });
                            }
                        });
                    }
                });
            }
        }

        const lanyardResponse = await fetch(
            `https://lanyard.equicord.org/v1/users/${userId}`
        );
        if (lanyardResponse.ok) {
            const lanyardJson = await lanyardResponse.json();
            const lanyardData = lanyardJson?.data;
            userData.status = lanyardData?.discord_status || "offline";

            const avatarUrl = `https://cdn.discordapp.com/avatars/${lanyardData?.discord_user?.id}/${lanyardData?.discord_user?.avatar}.png?size=240`
            userData.avatarUrl = avatarUrl;
        }

        return userData;
    } catch (error) {
        console.error("Error fetching user data:", error);
        return userData;
    }
}
