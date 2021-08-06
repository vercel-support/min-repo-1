import { queryField, list } from 'nexus'

export const ClosureReasonFindFirstQuery = queryField(
  'findFirstClosureReason',
  {
    type: 'ClosureReason',
    args: {
      where: 'ClosureReasonWhereInput',
      orderBy: list('ClosureReasonOrderByInput'),
      cursor: 'ClosureReasonWhereUniqueInput',
      distinct: 'ClosureReasonScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.closureReason.findFirst({
        ...args,
        ...select,
      })
    },
  },
)
