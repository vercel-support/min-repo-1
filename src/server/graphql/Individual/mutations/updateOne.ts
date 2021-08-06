import { mutationField, nonNull } from 'nexus'

export const IndividualUpdateOneMutation = mutationField(
  'updateOneIndividual',
  {
    type: nonNull('Individual'),
    args: {
      where: nonNull('IndividualWhereUniqueInput'),
      data: nonNull('IndividualUpdateInput'),
    },
    resolve(_parent, { data, where }, { prisma, select }) {
      return prisma.individual.update({
        where,
        data,
        ...select,
      })
    },
  },
)
