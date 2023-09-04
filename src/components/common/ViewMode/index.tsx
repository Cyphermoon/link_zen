import GridView from "./GridView";
import ListView from "./ListView";
import { ViewProps, ViewTypes } from "./type";

interface Props extends ViewProps {
    view?: ViewTypes
}

const ViewMode = ({ view, children, className }: Props) => {
    let View;

    switch (view) {
        case "list":
            View = ListView
            break;
        default:
            View = GridView
            break;
    }

    return (
        <View className={className}>
            {children}
        </View>
    )
}

export default ViewMode