import { mutationField, nonNull } from 'nexus'

export const IndividualTypeCreateOneMutation = mutationField(
  'createOneIndividualType',
  {
    type: nonNull('IndividualType'),
    args: {
      data: nonNull('IndividualTypeCreateInput'),
    },
    resolve(_parent, { data }, { prisma, select }) {
      return prisma.individualType.create({
        data,
        ...select,
      })
    },
  },
)
