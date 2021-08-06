import { mutationField, nonNull } from 'nexus'

export const FrequencyCreateOneMutation = mutationField('createOneFrequency', {
  type: nonNull('Frequency'),
  args: {
    data: nonNull('FrequencyCreateInput'),
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.frequency.create({
      data,
      ...select,
    })
  },
})
