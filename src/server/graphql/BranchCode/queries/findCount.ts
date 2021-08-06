import { queryField, nonNull, list } from 'nexus'

export const BranchCodeFindCountQuery = queryField('findManyBranchCodeCount', {
  type: nonNull('Int'),
  args: {
    where: 'BranchCodeWhereInput',
    orderBy: list('BranchCodeOrderByInput'),
    cursor: 'BranchCodeWhereUniqueInput',
    distinct: 'BranchCodeScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.branchCode.count(args as any)
  },
})
