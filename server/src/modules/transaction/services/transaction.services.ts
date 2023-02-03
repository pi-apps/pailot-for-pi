import { Transaction } from '../../../db/entity/Transaction';
import { AppDataSource } from '../../../db/dataSource';
import { ErrorResult, NotFoundResult, SuccessResult } from '../../../interfaces/result';
import { Result } from '../../../constants/result';

export type TransactionsResult = SuccessResult<Transaction[]> | ErrorResult;
export type TransactionResult = SuccessResult<Transaction> | NotFoundResult | ErrorResult;
export type DeleteTransactionResult = SuccessResult<null> | ErrorResult;

const TransactionRepository = AppDataSource.getRepository(Transaction);

export async function getTransactionsEntry(): Promise<TransactionsResult> {
	try {
		const results = await TransactionRepository.find({ where: { deletedDate: null } });
		return {
			type: Result.SUCCESS,
			data: results,
		};
	} catch (error) {
		return {
			type: Result.ERROR,
			message: error.message,
			error,
		};
	}
}

export async function getTransactionEntry(trxUid: string): Promise<TransactionResult> {
	try {
		const existingTrx = await TransactionRepository.findOne({
			where: { id: trxUid, deletedDate: null }
		});
		if (!existingTrx) {
			return {
				type: Result.NOT_FOUND,
				message: `Could not find transaction with id: ${trxUid}`,
			};
		}
		return {
			type: Result.SUCCESS,
			data: existingTrx,
		};
	} catch (error) {
		return {
			type: Result.ERROR,
			message: `An unexpected error occurred during getting transaction with id ${trxUid}`,
			error,
		};
	}
}

// soft deletes a transaction
export async function deleteTransactionEntry(trxUid: string): Promise<DeleteTransactionResult> {
	try {
		const existingTrx = await TransactionRepository.findOne({
			where: { id: trxUid, deletedDate: null }
		});
		existingTrx.deletedDate = new Date().toISOString();
		await TransactionRepository.save(existingTrx);
		return {
			type: Result.SUCCESS,
			data: null,
		};
	} catch (error) {
		return {
			type: Result.ERROR,
			message: `An unexpected error occurred while deleting transaction with id ${trxUid}`,
			error: error,
		};
	}
}