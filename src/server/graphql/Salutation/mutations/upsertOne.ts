import { mutationField, nonNull } from 'nexus'

export const SalutationUpsertOneMutation = mutationField(
  'upsertOneSalutation',
  {
    type: nonNull('Salutation'),
    args: {
      where: nonNull('SalutationWhereUniqueInput'),
      create: nonNull('SalutationCreateInput'),
      update: nonNull('SalutationUpdateInput'),
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.salutation.upsert({
        ...args,
        ...select,
      })
    },
  },
)
