import { queryField, nonNull } from 'nexus'

export const ClosureReasonFindUniqueQuery = queryField(
  'findUniqueClosureReason',
  {
    type: 'ClosureReason',
    args: {
      where: nonNull('ClosureReasonWhereUniqueInput'),
    },
    resolve(_parent, { where }, { prisma, select }) {
      return prisma.closureReason.findUnique({
        where,
        ...select,
      })
    },
  },
)
