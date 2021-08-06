import { mutationField, nonNull } from 'nexus'

export const IndividualDeleteOneMutation = mutationField(
  'deleteOneIndividual',
  {
    type: 'Individual',
    args: {
      where: nonNull('IndividualWhereUniqueInput'),
    },
    resolve: async (_parent, { where }, { prisma, select }) => {
      return prisma.individual.delete({
        where,
        ...select,
      })
    },
  },
)
