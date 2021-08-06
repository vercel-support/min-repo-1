import { mutationField, nonNull } from 'nexus'

export const HomeOwnershipUpdateOneMutation = mutationField(
  'updateOneHomeOwnership',
  {
    type: nonNull('HomeOwnership'),
    args: {
      where: nonNull('HomeOwnershipWhereUniqueInput'),
      data: nonNull('HomeOwnershipUpdateInput'),
    },
    resolve(_parent, { data, where }, { prisma, select }) {
      return prisma.homeOwnership.update({
        where,
        data,
        ...select,
      })
    },
  },
)
