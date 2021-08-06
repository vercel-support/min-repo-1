import { mutationField, nonNull } from 'nexus'

export const HomeOwnershipCreateOneMutation = mutationField(
  'createOneHomeOwnership',
  {
    type: nonNull('HomeOwnership'),
    args: {
      data: nonNull('HomeOwnershipCreateInput'),
    },
    resolve(_parent, { data }, { prisma, select }) {
      return prisma.homeOwnership.create({
        data,
        ...select,
      })
    },
  },
)
