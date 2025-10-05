const userId = "848339671629299742";

export async function fetchUserData() {
    const userData = {
        badges: [],
        clanName: "",
        clanBadge: "",
        customStatus: "",
        activity: "",
        active_on_discord_web: false,
        active_on_discord_mobile: false,
        active_on_discord_desktop: false,
        active_on_discord_embedded: false,
    };

    try {

        const lanyardRes = await fetch(`https://lanyard.atums.world/v1/users/${userId}`);
        if (lanyardRes.ok) {
            const lanyardJson = await lanyardRes.json();
            const lanyardData = lanyardJson?.data;
            const user = lanyardData?.discord_user;
            const clan = user?.primary_guild;
            const clanBadge = `https://cdn.discordapp.com/clan-badges/${clan?.identity_guild_id}/${clan?.badge}.png?size=16`
            const customStatus = lanyardData?.activities?.find((a) => a.type === 4);
            const activity = lanyardData?.activities?.find((a) => a.type !== 4);

            userData.clanBadge = clanBadge;
            userData.clanName = clan?.tag;

            userData.customStatus = customStatus?.state?.slice(0, 10) + "...";
            userData.activity = activity?.details ?? activity?.name;

            userData.active_on_discord_web = lanyardData?.active_on_discord_web;
            userData.active_on_discord_mobile = lanyardData?.active_on_discord_mobile;
            userData.active_on_discord_desktop = lanyardData?.active_on_discord_desktop;
            userData.active_on_discord_embedded = lanyardData?.active_on_discord_embedded;

        }

        const badgeRes = await fetch(`https://badges.equicord.org/${userId}?seperated=true&capitalize=true`);
        if (badgeRes.ok) {
            const badgeData = await badgeRes.json();

            if (badgeData?.badges) {
                Object.entries(badgeData.badges).forEach(([type, badgeList]) => {
                    if (Array.isArray(badgeList)) {
                        badgeList.forEach((badge) => {
                            if (badge && badge.badge) {
                                userData.badges.push({
                                    name: badge.tooltip || badge.badge,
                                    tooltip: `${type}: ${badge.tooltip}`,
                                    icon: badge.badge,
                                    type,
                                });
                            }
                        });
                    }
                });
            }
        }

        return userData;
    } catch (error) {
        console.error("Error fetching user data:", error);
        return userData;
    }
}

export async function fetchUserStatus() {
    const userData = {
        status: "",
        avatar: "",
        decor: "",
    };

    try {
        const lanyardResponse = await fetch(`https://lanyard.equicord.org/v1/users/${userId}`);
        if (lanyardResponse.ok) {
            const lanyardJson = await lanyardResponse.json();
            const lanyardData = lanyardJson?.data;
            const user = lanyardData?.discord_user;
            const avatar = `https://cdn.discordapp.com/avatars/${user?.id}/${user?.avatar}.png?size=240`
            const decorationData = user?.avatar_decoration_data;
            const decor = `https://cdn.discordapp.com/avatar-decoration-presets/${decorationData?.asset}.png?size=64&passthrough=true`;

            userData.status = lanyardData?.discord_status || "offline";
            userData.avatar = avatar;

            if (decorationData) {
                userData.decor = decor;
            } else {
                const decorApi = await fetch(`https://decor.fieryflames.dev/api/users/${userId}`);
                if (decorApi.ok) {
                    const decorData = await decorApi.json();
                    if (decorData.decorationHash) {
                        userData.decor = `https://ugc.decor.fieryflames.dev/${decorData.decorationHash}.png?animated=true`;
                    }
                }
            }
        }

        return userData;
    } catch (error) {
        console.error("Error fetching user data:", error);
        return userData;
    }
}