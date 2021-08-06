import { queryField, nonNull, list } from 'nexus'

export const ClosureReasonFindCountQuery = queryField(
  'findManyClosureReasonCount',
  {
    type: nonNull('Int'),
    args: {
      where: 'ClosureReasonWhereInput',
      orderBy: list('ClosureReasonOrderByInput'),
      cursor: 'ClosureReasonWhereUniqueInput',
      distinct: 'ClosureReasonScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma }) {
      return prisma.closureReason.count(args as any)
    },
  },
)
