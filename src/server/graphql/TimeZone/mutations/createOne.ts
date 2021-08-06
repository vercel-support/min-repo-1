import { mutationField, nonNull } from 'nexus'

export const TimeZoneCreateOneMutation = mutationField('createOneTimeZone', {
  type: nonNull('TimeZone'),
  args: {
    data: nonNull('TimeZoneCreateInput'),
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.timeZone.create({
      data,
      ...select,
    })
  },
})
