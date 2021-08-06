import { mutationField, nonNull } from 'nexus'

export const RatingUpdateOneMutation = mutationField('updateOneRating', {
  type: nonNull('Rating'),
  args: {
    where: nonNull('RatingWhereUniqueInput'),
    data: nonNull('RatingUpdateInput'),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.rating.update({
      where,
      data,
      ...select,
    })
  },
})
