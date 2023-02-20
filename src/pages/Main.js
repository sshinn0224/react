import './Main.scss'

function Banners() {
    return <div>banner1</div>
}

function UpcomingAuction() {
    return <div>Upcoming Auction Area</div>
}

function Main() {
    return <div>
        <h1>Main Page</h1>
        <Banners />
        <UpcomingAuction />
    </div>
}

export default Main