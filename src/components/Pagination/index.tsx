import classnames from 'classnames';
import {DOTS, usePagination} from '../../hooks/usePagination';
import {FC} from 'react';
import styles from './styles.module.scss'

interface IPagination {
	onPageChange: (pageNumber: number) => void;
	totalCount: number;
	siblingCount?: number;
	currentPage: number;
	pageSize: number;
	className?: string;
}

const Pagination:FC<IPagination> = ({
	                                               onPageChange,
	                                               totalCount,
	                                               siblingCount = 1,
	                                               currentPage,
	                                               pageSize,
	                                               className,
                                               }) => {
	const paginationRange = usePagination({
		currentPage,
		totalCount,
		siblingCount,
		pageSize,
	});

	console.log(paginationRange)

	if (currentPage === 0 || paginationRange!.length < 2) {
		return null;
	}

	const onNext = () => {
		onPageChange(currentPage + 1);
	};

	const onPrevious = () => {
		onPageChange(currentPage - 1);
	};

	let lastPage = paginationRange![paginationRange!.length - 1];
	return (
		 <ul className={classnames(`${styles.paginationContainer}`, { [className!]: className })}>
			 <li
					className={classnames(`${styles.paginationItem}`, {
						disabled: currentPage === 1,
					})}
					onClick={onPrevious}
			 >
				 <div className={`${styles.arrow} ${styles.left}`} />
			 </li>
			 {paginationRange?.map((pageNumber, index) => {
				 if (pageNumber === DOTS) {
					 return <li key={index} className={`${styles.paginationItem} ${styles.dots}`}>&#8230;</li>;
				 }

				 return (
						<li
							 key={index}
							 className={classnames(`${styles.paginationItem}`, {
								 selected: pageNumber === currentPage,
							 })}
							 onClick={() => onPageChange(Number(pageNumber))}
						>
							{pageNumber}
						</li>
				 );
			 })}
			 <li
					className={classnames(`${styles.paginationItem}`, {
						disabled: currentPage === lastPage,
					})}
					onClick={onNext}
			 >
				 <div className={`${styles.arrow} ${styles.right}`} />
			 </li>
		 </ul>
	);
};

export default Pagination;
