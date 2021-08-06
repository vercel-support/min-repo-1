import { mutationField, nonNull } from 'nexus'

export const ClosureReasonUpdateOneMutation = mutationField(
  'updateOneClosureReason',
  {
    type: nonNull('ClosureReason'),
    args: {
      where: nonNull('ClosureReasonWhereUniqueInput'),
      data: nonNull('ClosureReasonUpdateInput'),
    },
    resolve(_parent, { data, where }, { prisma, select }) {
      return prisma.closureReason.update({
        where,
        data,
        ...select,
      })
    },
  },
)
