import { mutationField, nonNull } from 'nexus'

export const HomeOwnershipUpsertOneMutation = mutationField(
  'upsertOneHomeOwnership',
  {
    type: nonNull('HomeOwnership'),
    args: {
      where: nonNull('HomeOwnershipWhereUniqueInput'),
      create: nonNull('HomeOwnershipCreateInput'),
      update: nonNull('HomeOwnershipUpdateInput'),
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.homeOwnership.upsert({
        ...args,
        ...select,
      })
    },
  },
)
