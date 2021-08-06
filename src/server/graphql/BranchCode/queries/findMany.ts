import { queryField, nonNull, list } from 'nexus'

export const BranchCodeFindManyQuery = queryField('findManyBranchCode', {
  type: nonNull(list(nonNull('BranchCode'))),
  args: {
    where: 'BranchCodeWhereInput',
    orderBy: list('BranchCodeOrderByInput'),
    cursor: 'BranchCodeWhereUniqueInput',
    distinct: 'BranchCodeScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.branchCode.findMany({
      ...args,
      ...select,
    })
  },
})
