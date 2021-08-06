import { queryField, nonNull, list } from 'nexus'

export const ClosureReasonFindManyQuery = queryField('findManyClosureReason', {
  type: nonNull(list(nonNull('ClosureReason'))),
  args: {
    where: 'ClosureReasonWhereInput',
    orderBy: list('ClosureReasonOrderByInput'),
    cursor: 'ClosureReasonWhereUniqueInput',
    distinct: 'ClosureReasonScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.closureReason.findMany({
      ...args,
      ...select,
    })
  },
})
