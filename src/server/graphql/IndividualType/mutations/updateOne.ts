import { mutationField, nonNull } from 'nexus'

export const IndividualTypeUpdateOneMutation = mutationField(
  'updateOneIndividualType',
  {
    type: nonNull('IndividualType'),
    args: {
      where: nonNull('IndividualTypeWhereUniqueInput'),
      data: nonNull('IndividualTypeUpdateInput'),
    },
    resolve(_parent, { data, where }, { prisma, select }) {
      return prisma.individualType.update({
        where,
        data,
        ...select,
      })
    },
  },
)
