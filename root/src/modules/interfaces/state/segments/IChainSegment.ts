import IDisplaySection from "../display/IDisplaySection";
import IRenderOutlineNode from "../render/IRenderOutlineNode";
import ISegmentNode from "./ISegmentNode";


export default interface IChainSegment {

    index: number;
    outlineNodes: Array<IRenderOutlineNode>;
    outlineNodesLoaded: boolean;

    start: ISegmentNode;
    end: ISegmentNode;

    // Which map (link) to search when looking for this segment's parent node
    segmentInSection: IDisplaySection | null;
    // Which map (link) to search when looking for this segment's nodes
    segmentSection: IDisplaySection | null;
    // Which map (link) to search when looking for the first node in the next segment
    segmentOutSection: IDisplaySection | null;
}

