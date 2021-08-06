import { queryField, list } from 'nexus'

export const BranchCodeAggregateQuery = queryField('aggregateBranchCode', {
  type: 'AggregateBranchCode',
  args: {
    where: 'BranchCodeWhereInput',
    orderBy: list('BranchCodeOrderByInput'),
    cursor: 'BranchCodeWhereUniqueInput',
    distinct: 'BranchCodeScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.branchCode.aggregate({ ...args, ...select }) as any
  },
})
