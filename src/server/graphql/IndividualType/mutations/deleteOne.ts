import { mutationField, nonNull } from 'nexus'

export const IndividualTypeDeleteOneMutation = mutationField(
  'deleteOneIndividualType',
  {
    type: 'IndividualType',
    args: {
      where: nonNull('IndividualTypeWhereUniqueInput'),
    },
    resolve: async (_parent, { where }, { prisma, select }) => {
      return prisma.individualType.delete({
        where,
        ...select,
      })
    },
  },
)
