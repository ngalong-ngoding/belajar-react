import Card from "./Card";

const MiniCard = ({ count }) => {
    return (
        <Card className="flex flex-col w-fit">
            <span>Active Automation</span>
            <span className="text-lg font-bold">{count}</span>
            <p>
                <span>15%</span> <span>Out of 5 total rules</span>
            </p>
        </Card>
    )
}

export default MiniCard;