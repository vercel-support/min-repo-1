import { queryField, list } from 'nexus'

export const ClosureReasonAggregateQuery = queryField(
  'aggregateClosureReason',
  {
    type: 'AggregateClosureReason',
    args: {
      where: 'ClosureReasonWhereInput',
      orderBy: list('ClosureReasonOrderByInput'),
      cursor: 'ClosureReasonWhereUniqueInput',
      distinct: 'ClosureReasonScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.closureReason.aggregate({ ...args, ...select }) as any
    },
  },
)
