<style>
    footer {
        @media (max-width: 768px) {
            flex-direction: column;
        }
        @media (min-width: 769px) {
            flex-direction: row;
        }

        margin-top: auto;

        padding: 1rem;
        min-height: 1.5rem;

        border-bottom-style: hidden;
    }

    #copyright {
        @media (max-width: 768px) {
            display: block;
        }
        @media (min-width: 769px) {
            margin-left: auto;
            margin-right: 1rem;
            display: inline-block;
        }

        line-height: 1.75rem;
    }
</style>

<footer class="card">
    <span>
        <a href="https://github.com/danilwhale"><img src="https://cdn.simpleicons.org/github/white" class="icon" alt="github"/></a>
        <a href="https://discord.com/users/1191777214467940414"><img src="https://cdn.simpleicons.org/discord/white" class="icon" alt="discord"></a>
        <a href="https://bsky.app/profile/danilwhale.bsky.social"><img src="https://cdn.simpleicons.org/bluesky/white" class="icon" alt="bluesky"></a>
        <a href="https://youtube.com/@danilwhale"><img src="https://cdn.simpleicons.org/youtube/white" class="icon" alt="youtube"></a>
    </span>
    <div id="copyright">
        Copyright (c) 2025 danilwhale
    </div>
</footer>
