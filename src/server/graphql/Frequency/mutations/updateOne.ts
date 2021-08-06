import { mutationField, nonNull } from 'nexus'

export const FrequencyUpdateOneMutation = mutationField('updateOneFrequency', {
  type: nonNull('Frequency'),
  args: {
    where: nonNull('FrequencyWhereUniqueInput'),
    data: nonNull('FrequencyUpdateInput'),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.frequency.update({
      where,
      data,
      ...select,
    })
  },
})
