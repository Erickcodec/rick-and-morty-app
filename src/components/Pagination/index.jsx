import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackward, faForward } from "@fortawesome/free-solid-svg-icons";
import "./index.css";

function PaginationItem({
  onClick,
  disabled = false,
  actived = false,
  ...props
}) {
  const { children } = props;

  return (
    <button
      className={`pagination-item ${actived && "pagination-item--active"} `}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
export default function Pagination({
  offset,
  currentPage,
  onPageChange,
  pagesPer,
  showNextButton,
  showPreviousButton,
}) {
  return (
    <div className="pagination">
      {showNextButton && (
        <PaginationItem
          disabled={currentPage < pagesPer}
          onClick={() => {
            onPageChange(Math.ceil(currentPage / pagesPer) - 1);
          }}
        >
          <FontAwesomeIcon icon={faBackward} size="xs" />
        </PaginationItem>
      )}
      {[...Array(offset).keys()].map((n) => {
        const nItem =
          n + 1 + Math.ceil(currentPage / pagesPer) * pagesPer - pagesPer;

        return (
          <PaginationItem
            key={n}
            actived={nItem == currentPage}
            onClick={() => {
              onPageChange(nItem);
            }}
          >
            {nItem}
          </PaginationItem>
        );
      })}
      {showPreviousButton && (
        <PaginationItem
          onClick={() => {
            onPageChange(1 + Math.ceil(currentPage / pagesPer) * pagesPer);
          }}
        >
          <FontAwesomeIcon icon={faForward} size="xs" />
        </PaginationItem>
      )}
    </div>
  );
}
