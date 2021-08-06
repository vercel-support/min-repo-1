import { mutationField, nonNull } from 'nexus'

export const ClosureReasonDeleteOneMutation = mutationField(
  'deleteOneClosureReason',
  {
    type: 'ClosureReason',
    args: {
      where: nonNull('ClosureReasonWhereUniqueInput'),
    },
    resolve: async (_parent, { where }, { prisma, select }) => {
      return prisma.closureReason.delete({
        where,
        ...select,
      })
    },
  },
)
