import { mutationField, nonNull } from 'nexus'

export const SalutationDeleteOneMutation = mutationField(
  'deleteOneSalutation',
  {
    type: 'Salutation',
    args: {
      where: nonNull('SalutationWhereUniqueInput'),
    },
    resolve: async (_parent, { where }, { prisma, select }) => {
      return prisma.salutation.delete({
        where,
        ...select,
      })
    },
  },
)
