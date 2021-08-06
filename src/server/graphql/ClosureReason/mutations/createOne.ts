import { mutationField, nonNull } from 'nexus'

export const ClosureReasonCreateOneMutation = mutationField(
  'createOneClosureReason',
  {
    type: nonNull('ClosureReason'),
    args: {
      data: nonNull('ClosureReasonCreateInput'),
    },
    resolve(_parent, { data }, { prisma, select }) {
      return prisma.closureReason.create({
        data,
        ...select,
      })
    },
  },
)
