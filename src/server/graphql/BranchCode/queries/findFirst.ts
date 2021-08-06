import { queryField, list } from 'nexus'

export const BranchCodeFindFirstQuery = queryField('findFirstBranchCode', {
  type: 'BranchCode',
  args: {
    where: 'BranchCodeWhereInput',
    orderBy: list('BranchCodeOrderByInput'),
    cursor: 'BranchCodeWhereUniqueInput',
    distinct: 'BranchCodeScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.branchCode.findFirst({
      ...args,
      ...select,
    })
  },
})
