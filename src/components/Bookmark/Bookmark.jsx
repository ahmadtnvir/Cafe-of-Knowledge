import PropTypes from "prop-types";

const Bookmark = ({bookmark}) => {
    // console.log(bookmark);
    return (
        <div className="bg-slate-50 rounded-lg p-8 mb-4 text-start">
            <h3 className="text-2xl font-semibold">{bookmark}</h3>
        </div>
    );
};
Bookmark.propTypes = {
    bookmark: PropTypes.string.isRequired, // Prop type validation for bookmark string
}

export default Bookmark;